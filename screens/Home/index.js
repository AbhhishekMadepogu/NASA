import React, { useState} from "react";
import{Text,View,ActivityIndicator, Alert,FlatList,Pressable,Image,ScrollView} from 'react-native';
import { FlatButton } from "../../components/FlatButton";
import { TextField } from "../../components/TextField";
import { styles } from "./styles";
import { URL } from "../../api/config";

import axios from "axios";

export const Home=({navigation})=>{
const [results,setResults]=useState([]);
const [startdate,setstartdate]=useState('');
const [enddate,setenddate]=useState('');
const [loading,setLoading]=useState(false);

const  fetchImages=async()=>{
// regex to test the string to be a date yyyy-mm-dd
let date_regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
if((date_regex.test(startdate))&&(date_regex.test(enddate))){
setLoading(true)
await axios.get(URL+`&start_date=${startdate}&end_date=${enddate}`).then(res=>{
console.log(res.data);    
setResults(res.data);
setLoading(false)
}).catch
(err=>{if(err.response){
setLoading(false)
console.log(err.response.status)
switch(err.response.status){
case 400:
Alert.alert('Error Occured','invalid request')
break;
case 429:
Alert.alert('Error Occured','Too many requests')
break;
default:
Alert.alert('Error Occured','Something went Wrong')
}  
}})
}else{
Alert.alert("Invalid Date",'please follow yyyy-mm-dd format',undefined,undefined);}  

}
return(
<ScrollView style={styles.container}>
<View style={[styles.view,{marginTop:24}]}>
<Text style={styles.boldText}>Picture of the day:</Text>
<Text>Search for Astronomy Picture of the day by date.</Text>
<TextField placeholder={'Start date'} onchangeText={(text)=>setstartdate(text)}></TextField>
<TextField placeholder={'End date'} onchangeText={(text)=>setenddate(text)}></TextField>
<FlatButton text={'Search'} onPress={()=>fetchImages()}></FlatButton>
<ActivityIndicator size={'large'} animating={loading}></ActivityIndicator>
</View>
<View style={styles.view}>
<Text style={styles.boldText}>Results({results.length}):</Text>
{results.length===0 ? <Text>No Results found. Enter a start and end date</Text> :
<FlatList 
bounces={false}
showsVerticalScrollIndicator={false}
numColumns={3}
data={results} 
keyExtractor={(_item,index)=>index.toString()}
renderItem={({item})=>(
<Pressable style={{margin:3}} onPress={()=>navigation.navigate('Details',{name:item.title,img:item.url,desc:item.explanation})}>
<Image source={{uri:item.url}} style={{height:105,width:105,borderRadius:4}}></Image>
</Pressable>)}></FlatList>
}
</View>
</ScrollView>
);
}