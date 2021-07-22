import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider, theme } from "react-native-fundamental";

export default function App() {
  return (
    <ThemeProvider value={theme}>
      <View style={styles.container}>
        <Button onPress={() => {}}>test</Button>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
