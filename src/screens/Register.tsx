import { NavigationProp } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

type RegisternProps = {
  navigation: NavigationProp<any>
}

export default function Register({ navigation }: RegisternProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <View
        style={styles.inputView}
      >
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          placeholderTextColor='#ff3f5c'
        />
      </View>
      <View
        style={styles.inputView}
      >
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          placeholderTextColor='#ff3f5c'
        />
      </View>
      <View
        style={styles.inputView}
      >
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder='Digite sua senha'
          placeholderTextColor='#ff3f5c'
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.register}>Já possui cadastro?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003f5c',
  },
  logo: {
    marginBottom: 40,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fb5b5a'
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    marginBottom: 20,
  },
  input: {
    height: 50,
    color: 'white',
    paddingHorizontal: 25
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
  },
  register: {
    color: 'white',
  }
});
