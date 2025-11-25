import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DataBaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    async initialize() {
        await DatabaseService.initialize();
    }

    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fechaCreacion));
        } catch(error) {
            console.error("Error al obtener usuarios:", error);
            throw new Error("No se pudieron obtener los usuarios");
        }
    }

    async crearUsuario(nombre) {
        try {
            Usuario.validar(nombre);

            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            this.notifyListeners();

            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fechaCreacion
            );
        } catch(error) {
            console.error("Error al crear usuario:", error);
            throw error;
        }
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}