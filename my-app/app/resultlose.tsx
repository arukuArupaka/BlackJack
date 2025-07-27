import { router } from "expo-router";
import { useState, } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [number, setNumber] = useState(0);
  function numberIncrease(buttonNumber: number) {
    buttonNumber += 1;
    return buttonNumber;
  }
  function numberDecrease(buttonNumber: number) {
    if (number != 0) {
      buttonNumber -= 1;
    } else {
      return buttonNumber;
    }
    return buttonNumber;
  }
  return (
    <ImageBackground
      source={require("../image/losebackground.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, marginTop: 50, marginVertical: 100, borderRadius: 80, alignItems:"center" }}
      >
       <Image
                      source={require("../image/loseremove.png")}
                      style={{ width: 400, height: 200 }}
                    ></Image>
       <Image
     source={require("../image/result.png")}
     style={{ width: 200, height: 80, }}
                                ></Image> 
             <Text
        style={{
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
     textDecorationLine: "underline",
          textDecorationColor: "#ff0019ff", 
  }}>
        -{} Pt
        </Text>
       <TouchableOpacity
          onPress={() => {router.push("/"); }}
          style={{
            width: 250,
            height: 100,
            backgroundColor: "#D9D9D9",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
            borderRadius: 100,
            marginTop: 300,
            
          }}
        >
          <Image
            source={require("../image/start.jpg")}
            style={{ width: 220, height: 50, resizeMode: 'contain' }}
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
