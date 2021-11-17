import React, { useEffect, useState } from "react";
import axios from "axios";

const AnotherApi = () => {
  const [num, setNum] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%20%2030d`
      );
      console.log(res.data);
    } 
    
    getData();
  }, []);
  return <div></div>;
};

export default AnotherApi;
