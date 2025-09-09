import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{ title: 'Página de usuários' }} />
        <Link style={styles.link} href="/users/4521/alana-maiumy">Usuário 1</Link>
        <Link style={styles.link} href="/users/9652/ana-paula">Usuário 2</Link>
        <Link style={styles.link} href="/users/7845/roberta-souza">Usuário 3</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D4ECFF',
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  link: {
    fontSize: 18,
    color: '#0A7CC9', 
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#0A7CC9',
    fontWeight: "bold",
  }
});