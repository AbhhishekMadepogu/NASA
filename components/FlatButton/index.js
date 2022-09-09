import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";
export const FlatButton = (props) => {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
};
