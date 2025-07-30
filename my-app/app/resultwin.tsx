import { useBet } from "@/hooks/betManagerContext";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

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
        style={{ flex: 1, marginTop: 50, marginVertical: 100, borderRadius: 80, alignItems:"center" }}
      >
    <Image
     source={require("../image/winremove.png")}
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
          textDecorationColor: "#28a745", 
  }}>
        +{bet}Pt
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 30 }}>
  <View
    style={{
      width: "40%",
      height: 100,
      backgroundColor: "#ffffffaa", // 半透明の白
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 30, fontWeight: "bold" }}>{pt-bet}Pt</Text>
  </View>
 <View
    style={{
      width: "20%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal:10
    }}
  >
    <Image source={require("../image/UP.png")}
     style={{ width: 100, height: 40, }}></Image>
    <Image source={require("../image/yajirusi1.png")}
     style={{ width: 100, height: 40, }}></Image>
  </View>
  <View
    style={{
      width: "40%",
      height: 100,
      backgroundColor: "#ffffffaa",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 30, fontWeight: "bold" }}>{pt}Pt</Text>
  </View>
</View>
       <TouchableOpacity
          onPress={() => {router.push("/"); setBet(0)}}
          style={{
            width: 250,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
            marginTop: 100,
            
          }}
        >          
          <Image
            source={require("../image/finish.png")}
            style={{ width: 220, height: 50, resizeMode: 'contain' }}
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
