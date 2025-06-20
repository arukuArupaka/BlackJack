import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

/**
 * Blackjack ― Result Screen
 *
 * Displays the current hand total, highlights special outcomes
 * (BLACKJACK or BUST), and lets the player adjust the running
 * total for quick testing.
 */
export default function ResultScreen() {
  const [total, setTotal] = useState(0);

  // -----------------------------
  //  Helpers
  // -----------------------------
  const increase = () => setTotal((prev) => prev + 1);
  const decrease = () => setTotal((prev) => (prev > 0 ? prev - 1 : 0));

  const resultLabel = () => {
    if (total === 0) return "タップして開始"; // Tap to start
    if (total === 21) return "ブラックジャック!"; // Blackjack!
    if (total > 21) return "バースト!"; // Bust!
    return `${total} ポイント`;
  };

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
          onPress={() => router.push("/")}
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
          <Image
            source={require("../image/resultimage.jpg")}
            style={{ width: 220, height: 60, resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 12 }}>
            win
          </Text>
        </TouchableOpacity>

        {/* Test Controls */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={increase}
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#4CAF50",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 40, color: "#fff" }}>＋</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={decrease}
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#F44336",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 40, color: "#fff" }}>－</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
