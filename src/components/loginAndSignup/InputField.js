import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const InputField = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.inputTitle}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={'#969696'}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 60,
    borderWidth: 0.5,
    borderColor: "#939393",
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 3
  },
  input: {
    height: 20,
  },
});
