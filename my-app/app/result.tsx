import { useState } from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from "react-native";

/**
 * Blackjack ― Result Screen
 *
 * Displays result only after tapping. Random total is generated on tap.
 */
export default function ResultScreen() {
  const [total, setTotal] = useState<number | null>(null);

  // -----------------------------
  //  Generate random total on tap
  // -----------------------------
  const generateRandomTotal = () => {
    const randomPoints = Math.floor(Math.random() * 30) + 1; // 1 to 30
    setTotal(randomPoints);
  };

  const resultLabel = () => {
    if (total === null) return "タップして表示"; // Tap to start
    if (total === 0) return "トータルの結果"; // Tap to start
    if (total === 21) return "ブラックジャック!"; // Blackjack!

    return `${total} ポイント`;
  };
  //むらいかす
  // -----------------------------
  //  UI
  // -----------------------------
  return (
    <ImageBackground
      source={require("../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg")}
      style={{ flex: 1, paddingTop: 50 }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* Result Card */}
        <TouchableOpacity
          onPress={generateRandomTotal}
          style={{
            width: 300,
            height: 160,
            backgroundColor: "#ffffffcc",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            marginBottom: 20,
          }}
        >
          {/* <Image
            source={require("../image/resultimage.jpg")}
            style={{ width: 220, height: 60, resizeMode: "contain" }}
          /> */}
          <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 12 }}>
            {resultLabel()}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}