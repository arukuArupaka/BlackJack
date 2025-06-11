import { router } from "expo-router";
import { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [number, setNumber] = useState(0);
  function numberIncrease(buttonNumber: number) {
    buttonNumber += 1;
    return buttonNumber;
  } 
  function numberDecrease(buttonNumber: number) {
    if (number !=0){
      buttonNumber -= 1;  
    }else{
      return buttonNumber; 
    }
    return buttonNumber;
  }
  return (
    <ImageBackground 
      source={require('../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg')}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
        source={require('../image/title.jpg')}
        style={{width:"67%",height:"22%", marginBottom:200}}>
        </Image>
        <View style={{justifyContent: "center", alignItems: "center",flexDirection:"row",gap:20}}>
          <View style={{width:45,height:45,backgroundColor:"#FFCC00",borderRadius:100,borderWidth:5,borderColor:"#FFAE00",justifyContent: "center", alignItems: "center"}}>
            <Text style={{color:"white"}}>50</Text>
          </View>
          <View style={{width:45,height:45,backgroundColor:"#FFCC00",borderRadius:100,borderWidth:5,borderColor:"#FFAE00",justifyContent: "center", alignItems: "center"}}>
            <Text style={{color:"white"}}>100</Text>
          </View>
          <View style={{width:45,height:45,backgroundColor:"#FFCC00",borderRadius:100,borderWidth:5,borderColor:"#FFAE00",justifyContent: "center", alignItems: "center"}}>
            <Text style={{color:"white"}}>500</Text>
          </View>
          <View style={{width:45,height:45,backgroundColor:"#FFCC00",borderRadius:100,borderWidth:5,borderColor:"#FFAE00",justifyContent: "center", alignItems: "center"}}>
            <Text style={{color:"white"}}>1k</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push("/game")} style={{width:300,height:150,backgroundColor:"#D9D9D9",justifyContent: "center", alignItems: "center",marginVertical:15,borderRadius:30,marginTop:50}}>
           <Image
          source={require('../image/start.jpg')}
          style={{width:220,height:50}}>
            </Image>

        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
