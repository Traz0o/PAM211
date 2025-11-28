import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
    constructor() {
        this.db = null;
        this.storageKey = 'usuarios';
    }

    async initialize() {
        if(Platform.OS === 'web') {
            console.log('Usando LocalStorage para web');
        } else {
            console.log('Usando SQLite para móvil');
            this.db = await SQLite.openDatabaseAsync('miapp.db');
            await this.db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);
        }
    }

    async getAll() {
        if(Platform.OS === 'web') {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } else {
            return await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC;');
        }
    }

    async add(nombre) {
        if(Platform.OS === 'web') {
            const usuarios = await this.getAll();
            
            const nuevoUsuario = {
                id: Date.now(),
                nombre,
                fechaCreacion: new Date().toISOString()
            };

            usuarios.unshift(nuevoUsuario);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return nuevoUsuario;
        } else {
            const result = await this.db.runAsync(
                'INSERT INTO usuarios (nombre) VALUES (?);',
                nombre
            );
            return {
                id: result.lastInsertRowId,
                nombre,
                fechaCreacion: new Date().toISOString()
            };
        }
    }

    async update(id, nombre) {
        if(Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const index = usuarios.findIndex(u => u.id === id);
            
            if(index === -1) {
                throw new Error('Usuario no encontrado');
            }

            usuarios[index].nombre = nombre;
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return usuarios[index];
        } else {
            const result = await this.db.runAsync(
                'UPDATE usuarios SET nombre = ? WHERE id = ?;',
                nombre,
                id
            );

            if(result.changes === 0) {
                throw new Error('Usuario no encontrado');
            }

            const usuario = await this.db.getFirstAsync(
                'SELECT * FROM usuarios WHERE id = ?;',
                id
            );
            return usuario;
        }
    }

    async delete(id) {
        if(Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const usuariosFiltrados = usuarios.filter(u => u.id !== id);
            
            if(usuarios.length === usuariosFiltrados.length) {
                throw new Error('Usuario no encontrado');
            }

            localStorage.setItem(this.storageKey, JSON.stringify(usuariosFiltrados));
            return true;
        } else {
            const result = await this.db.runAsync(
                'DELETE FROM usuarios WHERE id = ?;',
                id
            );

            if(result.changes === 0) {
                throw new Error('Usuario no encontrado');
            }

            return true;
        }
    }
}

export default new DatabaseService();