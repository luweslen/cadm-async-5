import { NavigationProp } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

type LoginProps = {
  navigation: NavigationProp<any>
}

export default function Login({ navigation }: LoginProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
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
      <TouchableOpacity>
        <Text style={styles.forgot}>Recuperar senha</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.register}>Cadastrar</Text>
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
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11
  },
  register: {
    color: 'white',
  }
});
