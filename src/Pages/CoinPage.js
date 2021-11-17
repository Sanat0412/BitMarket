import { LinearProgress, makeStyles, Paper, TableContainer, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../configration/api";
import { CryptoState } from "../Context";
import ReactHtMLParser from "react-html-parser";
import { numberWithCommas } from "../components/Banner/Carousel";
import CoinTable2 from "../components/CoinTable2";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();
    // const [loading, setloading] = useState(false);
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  useEffect(() => {
    fetchCoin();
  }, []);
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25,
        borderRight: "2px solid grey",
      },
      heading: {
        fontweight: "bold",
        marginBottom: 20,
        fontFamily: "Montessrat",
      },
      description: {
        fontFamily: "Montessrat",
        width: "100%",
        padding: 25,
        marginBottom: 15,
        paddingTop: 0,
        textAlign: "justify",
      },
      marketData: {
        alignSelf: "start",
        padding: 25,
        paddingTop: 10,
        width: "100%",
        display: "flex",
      },
      [theme.breakpoints.down("md")]: {
        // display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        display: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));
  const classes = useStyles();
  if (!coin) return <LinearProgress style={{ backgroundColor: "skyblue" }} />;
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.sidebar}>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{ marginBottom: 20 }}
          />
          <Typography variant="h3" className={classes.heading}>
            {coin?.name}
          </Typography>
          <Typography variant="subtitles" className={classes.description}>
            {ReactHtMLParser(coin?.description.en.split(".")[0])}
          </Typography>
          <div className={classes.marketData}>
            <span style={{ display: "flex" }}>
              <Typography
                variant="h5"
                className={classes.heading}
                style={{ fontFamily: "Montserrat", marginTop: 10 }}
              >
                Rank: {coin?.market_cap_rank}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography
                variant="h5"
                className={classes.heading}
                style={{ fontFamily: "Montserrat" }}
              >
                Current Price: &nbsp;
                {symbol} {""}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Market Cap:{" "}
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.ath[currency.toLowerCase()].toString()
                )}
              </Typography>
            </span>
          </div>
        </div>
        <CoinInfo coin={coin} />
        {/* <TableContainer component={Paper}>
        <loading ?(
          <LinearProgress style={{ backgroundColor: "skyblue" }} />
        ):(
          <Table aria-label="simple table">
            <TableHead style={{ backgroundColor: "skyblue" }}>
              <TableRow>

              </TableRow>
            </TableHead>
          </Table>
        )

      </TableContainer> */}
      </div>
      <div><CoinTable2 /></div>
    </div>
  );
};

export default CoinPage;
