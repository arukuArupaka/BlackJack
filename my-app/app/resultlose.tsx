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
      source={require("../image/losebackground.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, marginTop: 50, marginVertical: 20, borderRadius: 30 }}
      >
        <TouchableOpacity
          onPress={() => router.push("/")}>
        <Image
                      source={require("../image/loseremove.png")}
                      style={{ width: 400, height: 200 }}
                    ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
