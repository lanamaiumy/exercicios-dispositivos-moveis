import { StyleSheet, Text, View,TextInput,  Button } from 'react-native';
import React from 'react'

export default function Login() {

  const [username, usernameText] = React.useState('');
  const [password, passwordText] = React.useState('');

  return (
    <View>
      <TextInput 
          style={styles.input}
          onChangeText={usernameText}
          value={username}
          placeholder='username'
          placeholderTextColor= "#52525293"
        />

        <TextInput
          style={styles.input}
          onChangeText={passwordText}
          value={password}
          placeholder='password'
          placeholderTextColor= "#52525293"
          secureTextEntry={true}
        />

        <Button
          title = "Clique aqui!"
          color= "#3b9e70ff"
          onPress = {() => console.log(`Usuário: ${username} | Senha: ${password}`)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 35,
      margin: 10,
      borderWidth: 1,
      padding: 8,
      borderRadius: 10,
      fontFamily: 'Roboto'
    }
  });
