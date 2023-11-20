import React from "react";
import { View, StyleSheet } from "react-native";
import Index from "./src";

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5799c",
  },
});
