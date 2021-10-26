import React, { Children, createContext, useContext } from "react";
const Crypto = createContext();
const Context = ({ Children }) => {
  return <Crypto.Provider>{Children}</Crypto.Provider>;
};

export default Context;
export const CryptoState = () => {
  return useContext(Crypto);
};
