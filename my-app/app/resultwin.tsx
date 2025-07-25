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
      source={require("../image/winbackground.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, marginTop: 50, marginVertical: 100, borderRadius: 80 }}
      >
    <Image
     source={require("../image/winremove.png")}
     style={{ width: 400, height: 200 }}
                                ></Image>
       <TouchableOpacity
          onPress={() => {router.push("/"); setBet(0)}}
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
            style={{ width: 220, height: 50, marginRight:100 }}
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
