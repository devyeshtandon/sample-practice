import { useState } from "react";
import WalletHeader from "./Wallet";
import CartItems from "./CartItems";
import "./styles.css";

// https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd
// https://i.ibb.co/mFdHttR/Design.png
export default function App() {
  const [wallet, setWallet] = useState(500);

  const transact = (method, value) => {
    switch (method) {
      case "add":
        setWallet(wallet + value);
        break;
      case "deduct":
        if (wallet > value) setWallet(wallet - value);
        break;
      default:
        return false;
    }
    return true;
  };

  return (
    <div className="App">
      <WalletHeader amount={wallet} />
      <CartItems tranact={transact} />
    </div>
  );
}
