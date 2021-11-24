// import {
//   Container,
//   LinearProgress,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@material-ui/core";
// import { Table, Row, Col } from "reactstrap";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { numberWithCommas } from "./Banner/Carousel";
// import { CryptoState } from "../Context";
// import { CoinList, SingleCoin } from "../configration/api";
// import { useParams } from "react-router";

// const CoinTable2 = () => {
//   const [loading, setloading] = useState(false);
//   const { currency, symbol } = CryptoState();
//   const [coins, setCoins] = useState([]);
//   const [coin, setCoin] = useState();
//   const { id } = useParams();

//   const fetchCoin = async () => {
//     const { data } = await axios.get(
//       `https://gnews.io/api/v4/top-headlines?token=633fa8e153883785b56f3ca6b7de2b2b`
//     );
//     setCoin(data);
//     console.log(data);
//   };
//   useEffect(() => {
//     fetchCoin();
//   }, []);
//   return (
//     <TableContainer style={{ marginTop: "30px" }}>
//       {loading ? (
//         <LinearProgress style={{ backgroundColor: "skyblue" }} />
//       ) : (
//         <Table aria-label="simple table">
//           <TableHead style={{ backgroundColor: "skyblue" }}>
//             <TableRow>
//               {[
//                 "ATH",
//                 "ATH_Change_Percentage",
//                 "ATH_Date",
//                 "ATL",
//                 "ATL_Change_Percentage",
//                 "ATL_Date",
//                 "Maximum Supply",
//               ].map((coin) => (
//                 <TableCell
//                   style={{
//                     color: "black",
//                     fontWeight: "680",
//                     fontFamily: "Bold",
//                   }}
//                   key={coin.content }
//                   // align={coin === "ATH" ? " " : "left"}
//                 >
//                   {coin}
//                 </TableCell>
//               ))}
//             </TableRow>
//             {/* <TableCell>
//               <Typography variant="h3">{coin.coingecko_zrank}</Typography>
//             </TableCell>
//              <TableCell>
//               <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
//                 {coin?.ath}
//               </Typography>
//             </TableCell>  */}
//             {/* <TableCell>
//               <Typography
//                 variant="h5"
//                 style={{ fontFamily: "Montserrat" }}
//               >
//                 {numberWithCommas(
//                   coin?.market_data.ath_date[currency.toLowerCase()]
//                 )}
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography
//                 variant="h5"
//                 style={{ fontFamily: "Montserrat" }}
//               >
//                 {numberWithCommas(
//                   coin?.market_data.atl[currency.toLowerCase()]
//                 )}
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography
//                 variant="h5"
//                 style={{ fontFamily: "Montserrat" }}
//               >
//                 {numberWithCommas(
//                   coin?.market_data.atl_change_percentage[
//                     currency.toLowerCase()
//                   ]
//                 )}
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography
//                 variant="h5"
//                 style={{ fontFamily: "Montserrat" }}
//               >
//                 {numberWithCommas(
//                   coin?.market_data.atl_date[currency.toLowerCase()]
//                 )}
//               </Typography>
//             </TableCell> */}
//             {/* <TableCell>
//                 <Typography
//                   variant="h5"
//                     style={{ fontFamily: "Montserrat" }}
//                 >
//                   {numberWithCommas(
//                     coin?.market_data.total_supply[currency.toLowerCase()]
//                   )}
//                 </Typography>
//               </TableCell> */}
//           </TableHead>
//           <TableBody></TableBody>
//         </Table>
//       )}
//     </TableContainer>
//   );
// };

// export default CoinTable2;
