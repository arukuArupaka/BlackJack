import { useState } from "react";
import { router } from "expo-router";
import { Image, ImageBackground, TouchableOpacity, View, Text } from "react-native";
export default function Game() {
return(
    <ImageBackground 
          source={require('../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg')}
          style={{ flex: 1 }}
        >
          <Text style={{fontSize:40,padding:40,marginTop:40}}>
            ここまでしかできてないよん
          </Text>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{justifyContent: "center", alignItems: "center",flexDirection:"row",gap:20}}>
              <View style={{width:45,height:45,backgroundColor:"#FFCC00",borderRadius:100,borderWidth:5,borderColor:"#FFAE00",justifyContent: "center", alignItems: "center"}}>
                <Text style={{color:"white"}}>50</Text>
              </View>
              <View style={{width:45,height:45,backgroundColor:"#FFCC00",borderRadius:100,borderWidth:5,borderColor:"#FFAE00",justifyContent: "center", alignItems: "center"}}>
                <Text style={{color:"white"}}>100</Text>
              </View>
              <View style={{width:45,height:45,backgroundColor:"#FFCC00",borderRadius:100,borderWidth:5,borderColor:"#FFAE00",justifyContent: "center", alignItems: "center"}}>
                <Text style={{color:"white"}}>500</Text>
              </View>
              <View style={{width:45,height:45,backgroundColor:"#FFCC00",borderRadius:100,borderWidth:5,borderColor:"#FFAE00",justifyContent: "center", alignItems: "center"}}>
                <Text style={{color:"white"}}>1k</Text>
              </View>
            </View>
    
            <TouchableOpacity onPress={() => router.back()} style={{width:300,height:150,backgroundColor:"#D9D9D9",justifyContent: "center", alignItems: "center",marginVertical:15,borderRadius:30,marginTop:50}}>
               <Image
              source={require('../image/start.jpg')}
              style={{width:220,height:50}}>
                </Image>
    
            </TouchableOpacity>
          </View>
        </ImageBackground>
)
}