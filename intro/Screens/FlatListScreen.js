import React from 'react'
import { Text, View, StyleSheet, FlatList, SectionList } from 'react-native'

export default function FlatListScreen() {
  const ejercicios = [
    { id: '1', nombre: 'Sentadillas', descripcion: 'Ejercicio para pierna' },
    { id: '2', nombre: 'Lagartijas', descripcion: 'Ejercicio para pecho' },
    { id: '3', nombre: 'Abdominales', descripcion: 'Ejercicio para abdomen' },
    { id: '4', nombre: 'Burpees', descripcion: 'Ejercicio completo' },
    { id: '5', nombre: 'Zancadas', descripcion: 'Ejercicio para pierna' },
    { id: '6', nombre: 'Plancha', descripcion: 'Ejercicio para abdomen' },
  ]

  const contactos = [
    { titulo: 'A', data: ['Alejandra', 'Ana', 'Adele', 'Alex'] },
    { titulo: 'B', data: ['Bernardo', 'Beto'] },
    { titulo: 'C', data: ['Carla', 'Carlos', 'Carina'] },
    { titulo: 'D', data: ['David'] },
  ]

  return (
    <View style={styles.container}>
        
      <View style={styles.listContainer}>
        <Text style={styles.titulo}>Lista de ejercicios</Text>
        <FlatList
          data={ejercicios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.titulo}>Lista de contactos</Text>
        <SectionList
          sections={contactos}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.header}>{section.titulo}</Text>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ff9cf7ff',
  },
  listContainer: {
    flex: 1,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    backgroundColor: 'pink',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 14,
    color: 'gray',
  },
  header: {
    fontSize: 18,
    backgroundColor: '#ffa6f6ff',
    padding: 10,
    marginTop: 10,
  },
})
