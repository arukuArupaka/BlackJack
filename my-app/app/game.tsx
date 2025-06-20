import { useBet } from "@/hooks/betManagerContext";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View, } from "react-native";
 const cardImages: Record<string, any> = { //Record<K,V> KをキーとしてVを呼び出せる？
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

const CardScores: Record<string, number> = {
  "01": 1,
  "02": 2,
  "03": 3,
  "04": 4,
  "05": 5,
  "06": 6,
  "07": 7,
  "08": 8,
  "09": 9,
  "10": 10,
  "11": 10,
  "12": 10,
  "13": 10,
};
export default function Game() {
  const { bet, setBet } = useBet();
  const [cards, setCards] = useState<string[]>([]);
  const [cards2, setCards2] = useState<string[]>([]);
  const [myScore, setMyScore] = useState<number>(0);
  const [dealerScore, setDealerScore] = useState<number>(0);
  const [hitNum, setHitNum] = useState<boolean>(true);
  const delay =(ms:number) => new Promise((resolve) => setTimeout(resolve,ms)); 
  const mark = ["c", "d", "h", "s"];
  const num = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
  const deck = num.flatMap(num => mark.map(mark => `${num}${mark}`));
    const [fixedCards, setFixedCards] = useState<string[]>([]); // プレイヤーの初回2枚を固定
  
  const evalmyScore = (myScore:number) => {
    if(myScore>21){                     //バースト
      router.push("/resultlose") //負け
    }else if(myScore == 21){            //ブラックジャック
      router.push("/resultwin") //勝ち
    }else
   return myScore;
  }

    const evaldealerScore = (dealerScore:number) => {
    if(dealerScore>21){                     //バースト
      router.push("/resultwin") //勝ち
    }else if(dealerScore == 21){            //ブラックジャック
      router.push("/resultlose") //負け
    }else
   return dealerScore;
  }

  const judge = useCallback((myScore:number,dealerScore:number) =>{
    if(myScore>dealerScore){
      setBet(bet*2);
      router.push("/resultwin"); //勝ち
    }else{
      setBet(0);
      router.push("/resultlose"); //負け
    }
  },[setBet,bet,])
  const calcScore = (hand:string[]) : number =>{
    let score = 0;
    let aceNum = 0;

    hand.forEach((card) =>{
      const cardNum = card.slice(0,-1);//-1??
      if(cardNum === "01"){
        aceNum += 1;
      } else{
        score += CardScores[cardNum];
      }
    });
        for(let i = 0; i < aceNum; i++){
          if(score + 11 <=21){
            score += 11;
          }else{
            score += 1;
          }
         }  
         return score;
   }

  const drawTwoCards = useCallback(() => {
    const shuffle = [...deck].sort(() => Math.random() - 0.5);
    setCards(shuffle.slice(0, 2));
    setCards2(shuffle.slice(2, 4)); // プレイヤーとディーラーで異なるカード
  }, []);

  const hit =  useCallback(async() => {

    await delay(800);
    const saveDeck = deck.filter(
      (card) => !cards.includes(card) && !cards2.includes(card)
    );
    if (saveDeck.length > 0) {
      const shuffle = [...saveDeck].sort(() => Math.random() - 0.5);
      setCards2((prev) => [...prev, shuffle[0]]);
    }
      setHitNum(false);
      console.log(cards2[0]);
      console.log(cards2[1]);
      console.log(cards2[2]);
  },[deck,cards,cards2]);//なんだこれ

    const hitDealer = useCallback(() => {
    
    const saveDeck = deck.filter(
      (card) => !cards.includes(card) && !cards2.includes(card)
    );
    if (saveDeck.length > 0) {
      const shuffle = [...saveDeck].sort(() => Math.random() - 0.5);
      setCards((prev) => [...prev, shuffle[0]]);
      console.log(dealerScore);    //確認用
    }
  }, []);

   const stand= useCallback(async() =>{//whileが使えないためやけくそif
    await delay(800);
    if(dealerScore>17){
   judge(myScore,dealerScore) }else{
    hitDealer();
    setDealerScore(dealerScore);  //ためしに
    console.log(dealerScore);
  }
  },[]);

  const doubleUp =useCallback(async() => {
    await delay(800);        
     hit();
     setBet(bet*2); 
     stand();
  }, []);



  useEffect(() =>{
    drawTwoCards();    
  },[] //ここに変数を入れるとその変数が変更されたときに上のやつが実行される。（useEffectの第二引数）   
  );

   useEffect(() =>{
     setMyScore(calcScore(cards2));
     setDealerScore(calcScore(cards));
   },[cards, cards2]
   
 );
  useEffect(() =>{
    evalmyScore(myScore);
    evaldealerScore(dealerScore);
  },[myScore, dealerScore]);

   useEffect(() => {
    if (cards2.length >= 2 && fixedCards.length === 0) {
      setFixedCards(cards2.slice(0, 2));
    }
  }, [cards2, fixedCards]);
  
 

return(
    <ImageBackground 
          source={require('../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg')}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>{bet}</Text>
                
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>{dealerScore}</Text>
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

          
                    <Image
            source={cardImages[cards[2]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -20,
              zIndex: 3,
              borderRadius: 10,
            }}
          />

                    <Image
            source={cardImages[cards[3]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -20,
              zIndex: 4,
              borderRadius: 10,
            }}
          />
      
      </View>
         


           
               <View style={{ flexDirection: 'row', marginTop: 40 }}>
            <Text>{myScore}</Text>
          {/* <Image 
            source={cardImages[cards2[0]]}
            style={{
              width: 100,
              height: 140,
             // marginRight: -20,
              zIndex: 1,
              borderRadius: 10,
            }}
          />

          <Image
            source={cardImages[cards2[1]]}
            style={{
              width: 100,
              height: 140,
              //marginLeft: -20,
              zIndex: 2,
              borderRadius: 10,
            }}
          /> */}

           {/* {cards2.map((card,index) => (
            <Image
            key = {card}
            source = {cardImages[card]}
            style = {{
              width: 100,
              height: 140,
              marginLeft: -50,
              zIndex: index  }}/>
          ))} */}

                    {/* <Image
            source={cardImages[cards2[2]]}
            style={{
              width: 100,
              height: 140,
              //marginLeft: -20,
              zIndex: 3,
              borderRadius: 10,
            }}
          /> 

                     <Image
            source={cardImages[cards2[3]]}
            style={{
              width: 100,
              height: 140,
             // marginLeft: -20,
              zIndex: 4,
              borderRadius: 10,
            }}
          /> */}
           {/* 固定された初回2枚 */}
          {fixedCards[0] && (
            <Image
              key={fixedCards[0]}
              source={cardImages[fixedCards[0]]}
              style={{
                width: 100,
                height: 140,
                marginLeft: -50,
                zIndex: 1,
                borderRadius: 10,
              }}
            />
          )}
          {fixedCards[1] && (
            <Image
              key={fixedCards[1]}
              source={cardImages[fixedCards[1]]}
              style={{
                width: 100,
                height: 140,
                marginLeft: -50,
                zIndex: 2,
                borderRadius: 10,
              }}
            />
          )}
          {/* 追加のカード（3枚目以降） */}
          {cards2.slice(2).map((card, index) => (
            <Image
              key={card}
              source={cardImages[card]}
              style={{
                width: 100,
                height: 140,
                marginLeft: -50,
                zIndex: 3 + index,
                borderRadius: 10,
              }}
            />
          ))}
      </View>
              
          

            {hitNum &&(<TouchableOpacity onPress={() => doubleUp()} style={{width:171.5,height:85.5,backgroundColor:"#00008b",justifyContent: "center", alignItems: "center",marginVertical:15,borderRadius:30,marginTop:100}}>
           <Image
          source={require('../image/doubleupimage.png')}
          style={{width:171.5,height:85.5}}>
            </Image>
        </TouchableOpacity>)}
        
   

    <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>    
       <TouchableOpacity onPress={() => hit()} style={{width:171.5,height:85.5,justifyContent: "center", alignItems: "center",marginVertical:15,marginTop:20,marginRight:20}}>
           <Image
          source={require('../image/hitimage.png')}
          style={{width:171.5,height:85.5, }}>
            </Image>

        </TouchableOpacity>
    <TouchableOpacity onPress={() =>stand()}  style={{width:171.5,height:85.5,justifyContent: "center", alignItems: "center",marginVertical:15,marginTop:20}}>
           <Image
          source={require('../image/standimage.png')}
          style={{width:171.5,height:85.5, }}>
            </Image>

        </TouchableOpacity></View>
  </View>
        
        </ImageBackground>
)
}