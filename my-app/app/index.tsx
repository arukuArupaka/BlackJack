import { useState } from "react";
import { Image, ImageBackground, View } from "react-native";

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
        style={{width:300,height:200,position:"absolute",top:100}}>
        </Image>
        <View>

        </View>
      </View>
    </ImageBackground>
  );
}
