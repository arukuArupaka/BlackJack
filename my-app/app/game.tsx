import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View, } from "react-native";
 const cardImages: Record<string, any> = { //ここなに？？？
  "01c": require("../cards/01c.gif"),
  "02c": require("../cards/02c.gif"),
  "03c": require("../cards/03c.gif"),
  "04c": require("../cards/04c.gif"),
  "05c": require("../cards/05c.gif"),
  "06c": require("../cards/06c.gif"),
  "07c": require("../cards/07c.gif"),
  "08c": require("../cards/08c.gif"),
  "09c": require("../cards/09c.gif"),
  "10c": require("../cards/10c.gif"),
  "11c": require("../cards/11c.gif"),
  "12c": require("../cards/12c.gif"),
  "13c": require("../cards/13c.gif"),
  "01d": require("../cards/01d.gif"),
  "02d": require("../cards/02d.gif"),
  "03d": require("../cards/03d.gif"),
  "04d": require("../cards/04d.gif"),
  "05d": require("../cards/05d.gif"),
  "06d": require("../cards/06d.gif"),
  "07d": require("../cards/07d.gif"),
  "08d": require("../cards/08d.gif"),
  "09d": require("../cards/09d.gif"),
  "10d": require("../cards/10d.gif"),
  "11d": require("../cards/11d.gif"),
  "12d": require("../cards/12d.gif"),
  "13d": require("../cards/13d.gif"),
  "01h": require("../cards/01h.gif"),
  "02h": require("../cards/02h.gif"),
  "03h": require("../cards/03h.gif"),
  "04h": require("../cards/04h.gif"),
  "05h": require("../cards/05h.gif"),
  "06h": require("../cards/06h.gif"),
  "07h": require("../cards/07h.gif"),
  "08h": require("../cards/08h.gif"),
  "09h": require("../cards/09h.gif"),
  "10h": require("../cards/10h.gif"),
  "11h": require("../cards/11h.gif"),
  "12h": require("../cards/12h.gif"),
  "13h": require("../cards/13h.gif"),
  "01s": require("../cards/01s.gif"),
  "02s": require("../cards/02s.gif"),
  "03s": require("../cards/03s.gif"),
  "04s": require("../cards/04s.gif"),
  "05s": require("../cards/05s.gif"),
  "06s": require("../cards/06s.gif"),
  "07s": require("../cards/07s.gif"),
  "08s": require("../cards/08s.gif"),
  "09s": require("../cards/09s.gif"),
  "10s": require("../cards/10s.gif"),
  "11s": require("../cards/11s.gif"),
  "12s": require("../cards/12s.gif"),
  "13s": require("../cards/13s.gif"),
};
export default function Game() {
 
  const [cards, setCards] = useState<string[]>([]);
  const [cards2, setCards2] = useState<string[]>([]);
  const mark = ["c", "d", "h", "s"];
  const num = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
  const deck = num.flatMap(num => mark.map(mark => `${num}${mark}`));
  
  const drawtwocards = () =>{
  const shuffle = [...deck].sort(() => Math.random() - 0.5);//シャッフル
  const draw = shuffle.slice(0, 2);//二枚ドロー
  setCards(draw) ;
  }
  const drawtwocards2 = () =>{
  const shuffle = [...deck].sort(() => Math.random() - 0.5);//シャッフル
  const draw = shuffle.slice(0, 2);//二枚ドロー
  setCards2(draw) ;
  };
  useEffect(() =>{
    drawtwocards();
    drawtwocards2();
  },[]        //空の依存配列でマウント時のみ実行とのことですが意味が分かりません

  )


return(
    <ImageBackground 
          source={require('../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg')}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
 
                 
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Image
            source={cardImages[cards[0]]}
            style={{
              width: 100,
              height: 140,
              marginRight: -20,
              zIndex: 2,
              borderRadius: 10,
            }}
          />
    
          <Image
            source={cardImages[cards[1]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -20,
              zIndex: 1,
              borderRadius: 10,
            }}
          />
      </View>
         


           
               <View style={{ flexDirection: 'row', marginTop: 40 }}>

          <Image
            source={cardImages[cards2[0]]}
            style={{
              width: 100,
              height: 140,
              marginRight: -20,
              zIndex: 2,
              borderRadius: 10,
            }}
          />

          <Image
            source={cardImages[cards2[1]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -20,
              zIndex: 1,
              borderRadius: 10,
            }}
          />
      </View>
              
          

            <TouchableOpacity onPress={() => router.push("/result")} style={{width:171.5,height:85.5,backgroundColor:"#00008b",justifyContent: "center", alignItems: "center",marginVertical:15,borderRadius:30,marginTop:100}}>
           <Image
          source={require('../image/doubleupimage.png')}
          style={{width:171.5,height:85.5}}>
            </Image>
            
            
        </TouchableOpacity>
    <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>     <TouchableOpacity  style={{width:171.5,height:85.5,justifyContent: "center", alignItems: "center",marginVertical:15,marginTop:20,marginRight:20}}>
           <Image
          source={require('../image/hitimage.png')}
          style={{width:171.5,height:85.5, }}>
            </Image>

        </TouchableOpacity>
    <TouchableOpacity  style={{width:171.5,height:85.5,justifyContent: "center", alignItems: "center",marginVertical:15,marginTop:20}}>
           <Image
          source={require('../image/standimage.png')}
          style={{width:171.5,height:85.5, }}>
            </Image>

        </TouchableOpacity></View>
  </View>
        
        </ImageBackground>
)
}