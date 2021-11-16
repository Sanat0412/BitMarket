import React, { useEffect, useState } from "react";
import axios from "axios";

const AnotherApi = () => {
  const [num, setNum] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";`
      );
      console.log(res.data);
    }
    getData();
  }, []);
  return <div></div>;
  
};

export default AnotherApi;
