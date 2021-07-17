import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, StatusBar as BarStatus } from "react-native";
import { PickDateTime } from "./src/datetimepicker";

export default function App() {
  return (
    <View style={styles.container}>
      <PickDateTime />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: BarStatus.currentHeight,
  },
});
