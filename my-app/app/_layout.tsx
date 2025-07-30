import { BetProvider } from "@/hooks/betManagerContext";
import { Stack } from "expo-router";
import React from "react";
import { useState, useEffect } from "react";
import * as Font from "expo-font";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          VegasNights: require("../assets/fonts/Ephesis-Regular.ttf"), // パスを調整
        });
        setFontsLoaded(true);
        console.log("VegasNights font loaded");
      } catch (error) {
        console.error("Font loading error:", error);
      }
    };
    loadFonts();
  }, []);
  return (
    <BetProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </BetProvider>
  );
}
