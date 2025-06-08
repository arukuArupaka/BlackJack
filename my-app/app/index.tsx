import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
export default function Index() {
  const [number, setNumber] = useState(0);
  function numberIncrease(buttonNumber: number) {
    buttonNumber += 1;
    return buttonNumber;
  } 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => setNumber(numberIncrease(number))} style={{ height:100, width:300, backgroundColor:"red", justifyContent:"center", alignItems:"center"}}>
        <Text style={{ color:"white", fontSize:20, fontWeight:"bold"}}>ボタン</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 60, fontWeight: "bold", paddingTop: 20}}>{number}</Text>
      </View>
    </View>
  );
}
