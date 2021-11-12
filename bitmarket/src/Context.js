import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
const Crypto = createContext();
const Context = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
  }, [currency]);
  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};
export default Context;
export const CryptoState = () => {
  return useContext(Crypto);
};
