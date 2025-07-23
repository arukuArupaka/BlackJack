import { router } from "expo-router";
import { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

const cardImages: Record<string, any> = {
 "00" : require("../cards2/back01.png"),
  "01c": require("../cards2/01c.png"),
  "02c": require("../cards2/02c.png"),
  "03c": require("../cards2/03c.png"),
  "04c": require("../cards2/04c.png"),
  "05c": require("../cards2/05c.png"),
  "06c": require("../cards2/06c.png"),
  "07c": require("../cards2/07c.png"),
  "08c": require("../cards2/08c.png"),
  "09c": require("../cards2/09c.png"),
  "10c": require("../cards2/10c.png"),
  "11c": require("../cards2/11c.png"),
  "12c": require("../cards2/12c.png"),
  "13c": require("../cards2/13c.png"),
  "01d": require("../cards2/01d.png"),
  "02d": require("../cards2/02d.png"),
  "03d": require("../cards2/03d.png"),
  "04d": require("../cards2/04d.png"),
  "05d": require("../cards2/05d.png"),
  "06d": require("../cards2/06d.png"),
  "07d": require("../cards2/07d.png"),
  "08d": require("../cards2/08d.png"),
  "09d": require("../cards2/09d.png"),
  "10d": require("../cards2/10d.png"),
  "11d": require("../cards2/11d.png"),
  "12d": require("../cards2/12d.png"),
  "13d": require("../cards2/13d.png"),
  "01h": require("../cards2/01h.png"),
  "02h": require("../cards2/02h.png"),
  "03h": require("../cards2/03h.png"),
  "04h": require("../cards2/04h.png"),
  "05h": require("../cards2/05h.png"),
  "06h": require("../cards2/06h.png"),
  "07h": require("../cards2/07h.png"),
  "08h": require("../cards2/08h.png"),
  "09h": require("../cards2/09h.png"),
  "10h": require("../cards2/10h.png"),
  "11h": require("../cards2/11h.png"),
  "12h": require("../cards2/12h.png"),
  "13h": require("../cards2/13h.png"),
  "01s": require("../cards2/01s.png"),
  "02s": require("../cards2/02s.png"),
  "03s": require("../cards2/03s.png"),
  "04s": require("../cards2/04s.png"),
  "05s": require("../cards2/05s.png"),
  "06s": require("../cards2/06s.png"),
  "07s": require("../cards2/07s.png"),
  "08s": require("../cards2/08s.png"),
  "09s": require("../cards2/09s.png"),
  "10s": require("../cards2/10s.png"),
  "11s": require("../cards2/11s.png"),
  "12s": require("../cards2/12s.png"),
  "13s": require("../cards2/13s.png"),
};

export default function Game() {

  const [cards, setCards] = useState<string[]>([]);
  const mark = ["c", "d", "h", "s"];
  const num = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
  const deck = num.flatMap(num => mark.map(mark => `${num}${mark}`));

  const drawtwocards = () => {
    const shuffle = [...deck].sort(() => Math.random() - 0.5); //シャッフル
    const draw = shuffle.slice(0, 2); //二枚ドロー
    setCards(draw);
  };
  //const cardimg = (cards) =>{
  //return require(`../assets/cards/${cards}.gif`)
  //}
  return (
    <ImageBackground
      source={require('../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg')}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={drawtwocards} style={{ height: 100, width: 200, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
          <Text>{cards}</Text>

          {cards.map((card) => ( //ここなに？？？
            <Image
              key={card} // カード名をkeyに
              source={cardImages[card]} />
          ))}



        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()} style={{ width: 300, height: 150, backgroundColor: "#D9D9D9", justifyContent: "center", alignItems: "center", marginVertical: 15, borderRadius: 30, marginTop: 50 }}>
          <Image
            source={require('../image/start.jpg')}
            style={{ width: 220, height: 50 }}>
          </Image>

        </TouchableOpacity>


      </View>
    </ImageBackground>
  );
}
