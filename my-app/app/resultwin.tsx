import { router } from "expo-router";
import { useBet } from "@/hooks/betManagerContext";
import { useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  // const [number, setNumber] = useState(0);
  // function numberIncrease(buttonNumber: number) {
  //   buttonNumber += 1;
  //   return buttonNumber;
  // }
  // function numberDecrease(buttonNumber: number) {
  //   if (number != 0) {
  //     buttonNumber -= 1;
  //   } else {
  //     return buttonNumber;
  //   }
  //   return buttonNumber;
  // }
  const{pt,setPt,bet,setBet}=useBet()
useEffect(()=>{
  setPt(bet+pt);
},[])
  return (
    <ImageBackground
      source={require("../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg")}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, marginTop: 50, marginVertical: 20, borderRadius: 30 }}
      >
        <TouchableOpacity
          onPress={() => {router.push("/"); setBet(0)}}
          style={{
            width: 300,
            height: 340,
            backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
            borderRadius: 30,
            marginTop: 50,
            marginLeft: "24%",
          }}
        >
          <Text
            style={{
              fontSize: 50,
            }}
          >
            win +{bet} total{pt}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}