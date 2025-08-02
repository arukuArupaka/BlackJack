import { createContext, useContext, ReactNode, use, useRef } from "react";
import { useState } from "react";

// Contextで管理するデータの型を定義
interface BetManagerContextType {
  bet: number;
  setBet: (bet: number) => void;
  pt: number;
  setPt: (bet: number) => void;
  betSaver: number | null;
  saveBet: (value: number) => void;
}

// Contextを作成
const BetManagerContext = createContext<BetManagerContextType | undefined>(
  undefined
);

// プロバイダーコンポーネント
export function BetProvider({ children }: { children: ReactNode }) {
  const [bet, setBet] = useState(0);
  const [pt, setPt] = useState(5000);
  const betSaverRef = useRef<number | null>(null);
  const saveBet = (value: number) => {
    betSaverRef.current = value; // 指定された値を保存
  };
  return (
    <BetManagerContext.Provider
      value={{
        bet,
        setBet,
        pt,
        setPt,
        betSaver: betSaverRef.current,
        saveBet,
      }}
    >
      {children}
    </BetManagerContext.Provider>
  );
}

// Contextを使用するためのカスタムフック
export function useBet() {
  const context = useContext(BetManagerContext);
  if (!context) {
    throw new Error("useBetはBetProvider内で使用する必要があります");
  }
  return context;
}
