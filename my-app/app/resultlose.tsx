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
  const { betSaver } = useBet();
  const [number, setNumber] = useState(0);
  console.log({ betSaver });
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
        style={{
          flex: 1,
          marginTop: 50,
          marginVertical: 100,
          borderRadius: 80,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../image/loseremove.png")}
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
            textDecorationColor: "#ff0019ff",
          }}
        >
          -{betSaver} Pt
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 50,
            marginHorizontal: 25,
          }}
        >
          <View
            style={{
              width: "40%",
              height: 100,
              backgroundColor: "#ffffffaa", // 半透明の白
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{}Pt</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../image/DOWN.png")}
              style={{ width: 100, height: 40 }}
            ></Image>
            <Image
              source={require("../image/yajirusi1.png")}
              style={{ width: 100, height: 40 }}
            ></Image>
          </View>
          <View
            style={{
              width: "40%",
              height: 100,
              backgroundColor: "#ffffffaa",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{}Pt</Text>
          </View>
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
            marginTop: 100,
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
