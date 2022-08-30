import React from "react";
import{Pressable,Text} from 'react-native';
import { styles } from "./styles";
export const FlatButton=({text,onPress})=>{
return(
<Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
</Pressable>
);
}