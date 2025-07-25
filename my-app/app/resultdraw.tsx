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
        >
          <Image
                      source={require("../image/draw.png")}
                      style={{ width: 220, height: 50 }}
                    ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
