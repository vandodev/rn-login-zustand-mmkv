// app/index.tsx
import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => router.push("/login")}/>
      <Button title="Registro" onPress={() => router.push("/register")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  }
});
