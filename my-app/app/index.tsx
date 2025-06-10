import { useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";

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
        style={{width:"67%",height:"22%", marginVertical:30}}>
        </Image>
        <View style={{width:200,height:100,backgroundColor:"#ffffff",marginVertical:30}}></View>

        <TouchableOpacity style={{width:300,height:200,backgroundColor:"#ffd700",justifyContent: "center", alignItems: "center",marginVertical:30,borderRadius:30}}>
           <Image
          source={require('../image/start.jpg')}
          style={{width:250,height:60}}>
            </Image>

        </TouchableOpacity>
        
       
      </View>
    </ImageBackground>
  );
}
