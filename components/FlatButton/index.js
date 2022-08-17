import React from "react";
import{TouchableOpacity,Text} from 'react-native';
import { styles } from "./styles";
export const FlatButton=({text,onPress})=>{
return(
<TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
</TouchableOpacity>
);
}