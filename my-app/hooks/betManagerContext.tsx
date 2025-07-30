import { createContext, useContext, ReactNode, use } from "react";
import { useState } from "react";

// Contextで管理するデータの型を定義
interface BetManagerContextType {
  bet: number;
  setBet: (bet: number) => void;
  pt: number;
  setPt: (bet: number) => void;
  betSave: number;
  setBetSave: (BetSave: number) => void;
  betSaver: number;
  // setBetSaver: (Betsaver: number) => void;
}

// Contextを作成
const BetManagerContext = createContext<BetManagerContextType | undefined>(
  undefined
);

// プロバイダーコンポーネント
export function BetProvider({ children }: { children: ReactNode }) {
  // const [betSaver, setBetSaver] = useState(0);
  let betSaver = 0;
  const [bet, setBet] = useState(0);
  const [pt, setPt] = useState(5000);
  const [betSave, setBetSave] = useState(0);
  return (
    <BetManagerContext.Provider
      value={{
        bet,
        setBet,
        pt,
        setPt,
        betSave,
        setBetSave,
        betSaver,
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
