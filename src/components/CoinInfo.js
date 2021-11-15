import { CircularProgress, createTheme, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Classnames } from "react-alice-carousel";
import { HistoricalChart } from "../configration/api";
import { CryptoState } from "../Context";

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistoricData(data.prices);
  };
  useEffect(() => {
    fetchHistoricData();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "25",
      padding: "40",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: "0",
        padding: "20",
        paddingTop: "0",
      },
    },
  }));

  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={Classnames.container}>
        {!historicData ? (
          <CircularProgress
            style={{ color: "skyblue" }}
            size={250}
            thickness={2}
          />
        ) : (
          <>
           
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
