import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}>Perfil de usuario</Text>

        <Pressable
          style={[styles.button, styles.buttonSettings]}
          onPress={() => navigation.navigate('Detalles')}
        >
          <Text style={styles.buttonText}>Detalles del Usuario</Text>
        </Pressable>
      </View>
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
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
