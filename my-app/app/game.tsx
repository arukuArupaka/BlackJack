import { useBet } from "@/hooks/betManagerContext";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
 const cardImages: Record<string, any> = { //Record<K,V> KをキーとしてVを呼び出せる？
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
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [myturn, setMyturn] = useState<boolean>(true);
  const [gameNow, setGameNow] = useState<boolean>(true);  
  const delay =(ms:number) => new Promise((resolve) => setTimeout(resolve,ms)); 
  const mark = ["c", "d", "h", "s"];
  const num = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
  const deck = num.flatMap(num => mark.map(mark => `${num}${mark}`));
  
  const calcScore = (hand: string[]): number => {
    let score = 0;
    let aceCount = 0;

    hand.forEach((card) => {
      const cardNum = card.slice(0, -1); 
      if (cardNum === "01") {
        aceCount += 1;
      } else {
        score += CardScores[cardNum];
      }
    });
  
    for (let i = 0; i < aceCount; i++) {
      if (score + 11 <= 21) {
        score += 11;
      } else {
        score += 1;
      }
    }
    return score;
  };

  const firstDealerHand = (cards: string[]): number => {
    const card = cards[0];
    const cardNum = card.slice(0, -1);
    return cardNum === "01" ? 11 : CardScores[cardNum];
  };
  const judge = useCallback(
    async (myScore: number, dealerScore: number) => {
      if (!gameNow || !gameStart) return;

      await delay(800); 
      setGameNow(false); 

      
      if (myScore > 21) {
        setBet(0);
        setGameStart(false);
        setMyturn(true);
        router.push("/resultlose");
        return;
      }

      
      if (myScore === 21 && cards2.length === 2) {
        setBet(bet * 2.5); 
        setGameStart(false);
        setMyturn(true);
        router.push("/resultwin");
        return;
      }

      if (dealerScore === 21 && cards.length === 2 && !myturn) {
        setBet(0);
        setGameStart(false);
        setMyturn(true);
        router.push("/resultlose");
        return;
      }

      if (dealerScore > 21) {
        setBet(bet * 2);
        setGameStart(false);
        setMyturn(true);
        router.push("/resultwin");
        return;
      }

      if (myScore > dealerScore) {
        setBet(bet * 2);
        setGameStart(false);
        setMyturn(true);
        router.push("/resultwin");
      } else if (myScore < dealerScore) {
        setBet(0);
        setGameStart(false);
        setMyturn(true);
        router.push("/resultlose");
      } else {
        setBet(bet); 
        setGameStart(false);
        setMyturn(true);
        router.push("/resultdraw");
      }
    },
    [setBet, bet, gameNow, gameStart, myturn, cards, cards2]
  );

  const drawTwoCards = useCallback(() => {
    const shuffle = [...deck].sort(() => Math.random() - 0.5);
    setCards(shuffle.slice(0, 2)); 
    setCards2(shuffle.slice(2, 4)); 
    setGameStart(true);
    setGameNow(true);
    setMyturn(true);
  }, []);

  const hit = useCallback(async () => {
    const saveDeck = deck.filter((card) => !cards.includes(card) && !cards2.includes(card));
    if (saveDeck.length > 0) {
      const shuffle = [...saveDeck].sort(() => Math.random() - 0.5);
      setCards2((prev) => [...prev, shuffle[0]]);
      await delay(800); 
    }
  }, [cards, cards2]);

  const hitDealer = useCallback(async () => {
    const saveDeck = deck.filter((card) => !cards.includes(card) && !cards2.includes(card));
    if (saveDeck.length > 0) {
      const shuffle = [...saveDeck].sort(() => Math.random() - 0.5);
      setCards((prev) => [...prev, shuffle[0]]);
      await delay(800);
    }
  }, [cards, cards2]);

  const stand = useCallback(() => {
    setMyturn(false);
  }, []);

  const doubleUp = useCallback(
  async () => {
    setBet(bet * 2); 
    await hit(); 
    await delay(800); 
    if (myScore <= 21) {
      stand();
    }
  },
  [bet, hit, stand, setBet, myScore] 
);

 useEffect(() => {
    drawTwoCards();
  }, [drawTwoCards]);

useEffect(() => {
    setMyScore(calcScore(cards2));
  }, [cards2]);

useEffect(() => {
    if (!gameStart) return;
    if (myturn) {
      setDealerScore(firstDealerHand(cards));
    } else {
      setDealerScore(calcScore(cards));
    }
  }, [myturn, gameStart, cards]);

useEffect(() => {
    if (!gameStart || myturn || !gameNow) return;
    const dealerTurn = async () => {
      let currentScore = calcScore(cards);
      while (currentScore < 17) {
        await hitDealer();
        currentScore = calcScore(cards);
        await delay(800);
      }
      await judge(myScore, calcScore(cards));
    };

    dealerTurn();
  }, [myturn, gameStart, gameNow, myScore, judge, cards, hitDealer]);


useEffect(() => {
    if (!gameStart || !gameNow || !myturn) return;

    if (myScore > 21 || (myScore === 21 && cards2.length === 2)) {
      judge(myScore, dealerScore);
    }
  }, [myScore, gameStart, gameNow, myturn, dealerScore, judge, cards2]);
  
 

return(
    <ImageBackground 
          source={require('../image/7c45c5c8-06b6-4ef3-a46b-46e6ac72c2cd.jpg')}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>{bet}</Text>
                
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
          {myturn ? <Text>{dealerScore}</Text>
          :<Text>{dealerScore}</Text>}
          <Image
            source={cardImages[cards[0]]}
            style={{
              width: 100,
              height: 140,
              marginRight: -30,
              zIndex: 1,
              borderRadius: 10,
            }}
          />

    
          {myturn ? <Image
            source={require("../cards/back01.png")}
            style={{
              width: 100,
              height: 140,
              marginLeft: -30,
              zIndex: 2,
              borderRadius: 10,
            }}
          /> : <Image
            source={cardImages[cards[1]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -30,
              zIndex: 2,
              borderRadius: 10,
            }}
          /> }

          
                    <Image
            source={cardImages[cards[2]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -30,
              zIndex: 3,
              borderRadius: 10,
            }}
          />

                    <Image
            source={cardImages[cards[3]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -30,
              zIndex: 4,
              borderRadius: 10,
            }}
          />
      
      </View>
         


           
               <View style={{ flexDirection: 'row', marginTop: 40 }}>
            <Text>{myScore}</Text>
          <Image 
            source={cardImages[cards2[0]]}
            style={{
              width: 100,
              height: 140,
              marginRight: -30,
              zIndex: 1,
              borderRadius: 10,
            }}
          />

          <Image
            source={cardImages[cards2[1]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -30,
              zIndex: 2,
              borderRadius: 10,
            }}
          />

                    <Image
            source={cardImages[cards2[2]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -30,
              zIndex: 3,
              borderRadius: 10,
            }}
          /> 

                     <Image
            source={cardImages[cards2[3]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -30,
              zIndex: 4,
              borderRadius: 10,
            }}
          />

                               <Image
            source={cardImages[cards2[4]]}
            style={{
              width: 100,
              height: 140,
              marginLeft: -30,
              zIndex: 4,
              borderRadius: 10,
            }}
          />


      </View>

      
              
          

            {hitNum ?(<TouchableOpacity onPress={() => doubleUp()} style={{width:171.5,height:85.5,backgroundColor:"#00008b",justifyContent: "center", alignItems: "center",marginVertical:15,borderRadius:30,marginTop:100}}>
           <Image
          source={require('../image/doubleupimage.png')}
          style={{width:171.5,height:85.5}}>
            </Image>
        </TouchableOpacity>) : <View style={{width:171.5, height:85.5, marginTop:100, marginVertical:15 }}></View>}
            
        
   

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