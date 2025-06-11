import { useState } from "react";
import { router } from "expo-router";
import { Image, ImageBackground, TouchableOpacity, View, Text } from "react-native";
export default function Game() {
  const cardImages = {
  c01: require("../assets/cards/c01.gif"),
  c02: require("../assets/cards/c02.gif"),
  c03: require("../assets/cards/c03.gif"),
  c04: require("../assets/cards/c04.gif"),
  c05: require("../assets/cards/c05.gif"),
  c06: require("../assets/cards/c06.gif"),
  c07: require("../assets/cards/c07.gif"),
  c08: require("../assets/cards/c08.gif"),
  c09: require("../assets/cards/c09.gif"),
  c10: require("../assets/cards/c10.gif"),
  c11: require("../assets/cards/c11.gif"),
  c12: require("../assets/cards/c12.gif"),
  c13: require("../assets/cards/c13.gif"),
  d01: require("../assets/cards/d01.gif"),
  d02: require("../assets/cards/d02.gif"),
  d03: require("../assets/cards/d03.gif"),
  d04: require("../assets/cards/d04.gif"),
  d05: require("../assets/cards/d05.gif"),
  d06: require("../assets/cards/d06.gif"),
  d07: require("../assets/cards/d07.gif"),
  d08: require("../assets/cards/d08.gif"),
  d09: require("../assets/cards/d09.gif"),
  d10: require("../assets/cards/d10.gif"),
  d11: require("../assets/cards/d11.gif"),
  d12: require("../assets/cards/d12.gif"),
  d13: require("../assets/cards/d13.gif"),
  h01: require("../assets/cards/h01.gif"),
  h02: require("../assets/cards/h02.gif"),
  h03: require("../assets/cards/h03.gif"),
  h04: require("../assets/cards/h04.gif"),
  h05: require("../assets/cards/h05.gif"),
  h06: require("../assets/cards/h06.gif"),
  h07: require("../assets/cards/h07.gif"),
  h08: require("../assets/cards/h08.gif"),
  h09: require("../assets/cards/h09.gif"),
  h10: require("../assets/cards/h10.gif"),
  h11: require("../assets/cards/h11.gif"),
  h12: require("../assets/cards/h12.gif"),
  h13: require("../assets/cards/h13.gif"),
  s01: require("../assets/cards/s01.gif"),
  s02: require("../assets/cards/s02.gif"),
  s03: require("../assets/cards/s03.gif"),
  s04: require("../assets/cards/s04.gif"),
  s05: require("../assets/cards/s05.gif"),
  s06: require("../assets/cards/s06.gif"),
  s07: require("../assets/cards/s07.gif"),
  s08: require("../assets/cards/s08.gif"),
  s09: require("../assets/cards/s09.gif"),
  s10: require("../assets/cards/s10.gif"),
  s11: require("../assets/cards/s11.gif"),
  s12: require("../assets/cards/s12.gif"),
  s13: require("../assets/cards/s13.gif"),
};
  const [cards, setCards] = useState<string[]>([]);
  const mark = ["c", "d", "h", "s"];
  const num = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
  const deck = mark.flatMap(mark => num.map(num => `${mark}${num}`));
  
  const drawtwocards = () =>{
  const shuffle = [...deck].sort(() => Math.random() - 0.5);//シャッフル
  const draw = shuffle.slice(0, 2);//二枚ドロー
  setCards(draw) ;
};
  //const cardimg = (cards) =>{
    //return require(`../assets/cards/${cards}.gif`)
  //}
return(
    <ImageBackground 
          source={require('../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg')}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={drawtwocards} style= {{height:100, width:200, backgroundColor:"red", justifyContent:"center", alignItems:"center"}}>
              <Text>{cards}</Text>


            </TouchableOpacity>
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