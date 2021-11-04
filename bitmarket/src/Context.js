import React, {
  Children,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
const Crypto = createContext();
const Context = ({ Children }) => {
  const [currency, setcurrency] = useState("INR");
  const [symbol, setsymbol] = useState("💭");

  useEffect(() => {
    if (currency === "INR") setsymbol("💭");
    else if (currency === "USD") setsymbol("$");
  }, [currency]);
  return (
    <Crypto.Provider value={{ currency, symbol, setcurrency }}>
      {Children}
    </Crypto.Provider>
  );
};
export default Context;
export const CryptoState = () => {
  return useContext(Crypto);
};
