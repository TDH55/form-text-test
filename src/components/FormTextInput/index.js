import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

const FormComponent = (props) => {
  let {
    color,
    text,
    formComponentInput,
    secondFormComponentInput,
    anotherInput,
    exampleAction,
  } = props;

  let { anotherInputValue } = anotherInput;
  return (
    <View style={styles.wrapper}>
      <TextInput
        onChangeText={formComponentInput.onChange}
        value={formComponentInput.value}
        placeholder={formComponentInput.initial}
        style={{ height: 20, borderWidth: 2, borderColor: "black" }}
      />
      <TextInput
        type="text"
        name="input"
        onChangeText={secondFormComponentInput.onChange}
        value={secondFormComponentInput.value}
        placeholder={secondFormComponentInput.initial}
        style={{ height: 20, borderWidth: 2, borderColor: "black" }}
      />
      <TextInput
        type="text"
        name="input"
        onChangeText={anotherInputValue.onChange}
        value={anotherInputValue.value}
        placeholder={""}
        style={{ height: 20, borderWidth: 2, borderColor: "black" }}
      />
      <Button title="submit" onPress={() => exampleAction(1, "yellow")} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FormComponent;
