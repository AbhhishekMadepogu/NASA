import React from "react";
import{TextInput,View} from 'react-native';
// import { FloatingLabelInput } from 'react-native-floating-label-input';
//Tried implementing floatinglabelinput but having issues with react-native-reanimated
import { moondust500 } from "../../colors";
import { styles } from "./styles";
export const TextField=({placeholder,onchangeText})=>{
return(
<View>
<TextInput placeholder={placeholder} style={styles.text} onChangeText={onchangeText} placeholderTextColor={moondust500} maxLength={10}></TextInput>
</View>
);
}