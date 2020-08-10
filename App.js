import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App is running");

  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
