import react from "react"
import { Text,SafeAreaView,Image,Dimensions,View } from "react-native"
import { styles } from "./styles";

export const Details=({route,navigation})=>{
    const windowWidth = Dimensions.get('window').width;
    const{img,desc}=route.params
    return(
        <SafeAreaView style={styles.container}>
            <Image  style={[styles.img,{height:windowWidth,width:windowWidth}]}source={{uri:img}} resizeMode='contain'></Image>
            <View style={styles.textView}>
            <Text numberOfLines={10}>Description:{desc}</Text>
            </View>
        </SafeAreaView>
    )
}