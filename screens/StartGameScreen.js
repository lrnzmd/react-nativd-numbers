import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start new game!!!</Text>
      <Card style={styles.inputContainer}>
        <Text>Selct a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} color={colors.primary} />
          <Button title="Confirm" onPress={() => {}} color={colors.accent} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
