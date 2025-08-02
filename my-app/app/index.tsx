import { useBet } from "@/hooks/betManagerContext";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { bet, setBet, pt, setPt } = useBet();
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
  const calcBet = (ptNum: number) => {
    if (pt - ptNum >= 0) {
      setBet(bet + ptNum);
      setPt(pt - ptNum);
    }
  };

  return (
    <ImageBackground
      source={require("../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg")}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Ephesis-Regular",
            fontSize: 35,
          }}
        >
          Points:{pt}
        </Text>
        <Image
          source={require("../image/title.jpg")}
          style={{
            width: "67%",
            height: "22%",
            marginBottom: 75,
            marginTop: 50,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Ephesis-Regular",
            marginBottom: 75,
          }}
        >
          {bet}
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <TouchableOpacity onPress={() => calcBet(50)}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: "#FFCC00",
                borderRadius: 100,
                borderWidth: 5,
                borderColor: "#FFAE00",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Ephesis-Regular",
                  fontSize: 23,
                }}
              >
                50
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcBet(100)}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: "#FFCC00",
                borderRadius: 100,
                borderWidth: 5,
                borderColor: "#FFAE00",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Ephesis-Regular",
                  fontSize: 20,
                }}
              >
                100
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcBet(500)}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: "#FFCC00",
                borderRadius: 100,
                borderWidth: 5,
                borderColor: "#FFAE00",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Ephesis-Regular",
                  fontSize: 18,
                }}
              >
                500
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcBet(1000)}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: "#FFCC00",
                borderRadius: 100,
                borderWidth: 5,
                borderColor: "#FFAE00",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Ephesis-Regular",
                  fontSize: 23,
                }}
              >
                1k
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            router.push("/game");
          }}
          style={{
            width: 300,
            height: 150,
            backgroundColor: "#D9D9D9",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
            borderRadius: 30,
            marginTop: 50,
          }}
        >
          <Image
            source={require("../image/start.jpg")}
            style={{ width: 220, height: 50 }}
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
