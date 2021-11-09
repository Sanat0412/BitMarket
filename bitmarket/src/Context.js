import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
const Crypto = createContext();
const Context = ({ children }) => {
  const [currency, setcurrency] = useState("INR");
  const [symbol, setsymbol] = useState("💭");

  useEffect(() => {
    if (currency === "INR") setsymbol("💭");
    else if (currency === "USD") setsymbol("$");
  }, [currency]);
  return (
    <Crypto.Provider value={{ currency, setcurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};
export default Context;
export const CryptoState = () => {
  return useContext(Crypto);
};
