import { CircularProgress, createTheme, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Classnames } from "react-alice-carousel";
import { HistoricalChart } from "../configration/api";
import { CryptoState } from "../Context";
import { chartDays } from "../configration/data";
import SelectButton from "./Button";
import { Line } from "react-chartjs-2";

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

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

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistoricData(data.prices);
  };
   console.log(coin);
  useEffect(() => {
    fetchHistoricData();
  }, [days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicData ? (
          <CircularProgress
            style={{ color: "gradient[0]"}}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;

                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  //  {data:historicData.map((coin)=>coin[1])},
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "skyblue",
                  },
                ],
              }}
              options={{
                // to remove circles in chart
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
