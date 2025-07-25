import { useBet } from "@/hooks/betManagerContext";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";

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
        style={{ flex: 1, marginTop: 50, marginVertical: 100, borderRadius: 80 }}
      >
        <TouchableOpacity
          onPress={() => {router.push("/"); setBet(0)}}
          >
             <Image
                                  source={require("../image/win.png")}
                                  style={{ width: 400, height: 200 }}
                                ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}