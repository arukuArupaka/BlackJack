import { BetProvider } from "@/hooks/betManagerContext";
import { Stack } from "expo-router";
import React from "react";


export default function RootLayout() {
  return (
  <BetProvider>
    <Stack screenOptions={{headerShown: false}}/>
  </BetProvider>
  
  );
}
