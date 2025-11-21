import { View, Text, StyleSheet } from 'react-native';

export default function Detalles() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },
});
