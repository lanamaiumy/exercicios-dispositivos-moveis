import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams, Stack, router } from "expo-router";

export default function UserProfile() {
  const { id, name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Perfil de ${name}` }} />
      <Text style={styles.text}> Olá, {name}!</Text>
      <Text style={styles.text}> Seu ID: {id}</Text>
      <Button title="Voltar para a Home" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
  fontSize: 15,
  margin: 4
  }
});