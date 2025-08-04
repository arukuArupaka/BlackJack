import { useBet } from "@/hooks/betManagerContext";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { pt } = useBet();
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
      source={require("../image/drawbackground.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          marginTop: 50,
          marginVertical: 100,
          borderRadius: 80,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../image/drawremove.png")}
          style={{ width: 400, height: 200 }}
        ></Image>
        <Image
          source={require("../image/result.png")}
          style={{ width: 200, height: 80 }}
        ></Image>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "white",
            textDecorationLine: "underline",
            textDecorationColor: "#999999",
          }}
        >
          ±0 Pt
        </Text>
        <Image
          source={require("../image/KEEP.png")}
          style={{
            width: 200,
            height: 80,
            justifyContent: "center",
          }}
        ></Image>
        <View
          style={{
            width: "45%",
            height: 100,
            backgroundColor: "#ffffffaa", // 半透明の白
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>{pt}Pt</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            router.push("/");
          }}
          style={{
            width: 250,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
            marginTop: 50,
          }}
        >
          <Image
            source={require("../image/finish.png")}
            style={{ width: 400, height: 200, resizeMode: "contain" }}
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
