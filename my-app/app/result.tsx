import { router } from "expo-router";
import { useState } from "react";

import { Image, ImageBackground, TouchableOpacity, View } from "react-native";

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
      source={require("../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg")}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, marginTop: 50, marginVertical: 20, borderRadius: 30 }}
      >
        <TouchableOpacity
          onPress={() => router.push("/")}
          style={{
            width: 300,
            height: 140,
            backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
            borderRadius: 30,
            marginTop: 50,
            marginLeft: "12.5%",
          }}
        >
          <Image
            source={require("../image/resultimage.jpg")}
            style={{ width: 300, height: 40 }}
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
