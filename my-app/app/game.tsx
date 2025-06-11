import { router } from "expo-router";
import { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
export default function Game() {
 
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

            <TouchableOpacity onPress={() => router.back()} style={{width:171.5,height:85.5,backgroundColor:"#DDDDDD",justifyContent: "center", alignItems: "center",marginVertical:15,borderRadius:30,marginTop:50}}>
           <Image
          source={require('../image/start.jpg')}
          style={{width:171.5,height:85.5}}>
            </Image>

        </TouchableOpacity>
    <View style={{ flexDirection: 'row',justifyContent: 'space-between', marginTop: 0  }}>     <TouchableOpacity  style={{width:171.5,height:85.5,backgroundColor:"#DDDDDD",justifyContent: "center", alignItems: "center",marginVertical:15,borderRadius:30,marginTop:20,marginRight:20}}>
           <Image
          source={require('../image/start.jpg')}
          style={{width:171.5,height:85.5, }}>
            </Image>

        </TouchableOpacity>
    <TouchableOpacity  style={{width:171.5,height:85.5,backgroundColor:"#DDDDDD",justifyContent: "center", alignItems: "center",marginVertical:15,borderRadius:30,marginTop:20}}>
           <Image
          source={require('../image/start.jpg')}
          style={{width:171.5,height:85.5, }}>
            </Image>

        </TouchableOpacity></View>
  </View>
        
        </ImageBackground>
)
}