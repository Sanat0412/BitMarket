import {
  Container,
  createTheme,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { CoinList } from "../configration/api";
import { CryptoState } from "../Context";
import { numberWithCommas } from "../components/Banner/Carousel";
import Pagination from "@material-ui/lab/Pagination";
// import AboutUs from "./AboutUs";
// import Footer from "./Footer";
import { SingleCoin } from "../configration/api";
import CoinTable2 from "./CoinTable2";
import {useSortBy} from "react-table";


const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol } = CryptoState();
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles({
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        //from documentation
        color: "skyblue",
      },
    },
  });
  const classes = useStyles();

  const history = useHistory();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const fetchCoins = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);
    setCoins(data);
    setloading(false);
  };
  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
      );
    }, useSortBy);
  };
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          style={{ color: "skyblue", margin: 18, fontFamily: "bold" }}
        >
          CryptoCurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          style={{ marginBottom: 22, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "skyblue" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "skyblue" }}>
                <TableRow>
                  {[
                    "Rank",
                    "Coin",
                    "Price",
                    "24 Change",
                    "7 Day Change",
                    "Market Cap",
                  ].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "680",
                        fontFamily: "Bold",
                      }}
                      key={head}
                      align={head === "Rank" ? " " : "left"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 30, (page - 1) * 30 + 30)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => history.push(`/coin/${row.id}`)}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell>
                          <div className={classes.marketData}>
                            <span style={{ display: "flex" }}>
                              <Typography
                                variant="h5"
                                className={classes.heading}
                                style={{
                                  fontFamily: "Montserrat",
                                  marginTop: 10,
                                }}
                              >
                                {row.market_cap_rank}
                                
                              </Typography>
                            </span>
                          </div>
                        </TableCell>
                        <TableCell
                          align="left"
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 10,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",

                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            color: profit > 0 ? "green" : "red",
                            fontWeight: 480,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            color: profit > 0 ? "green" : "red",
                            fontWeight: 480,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%{" "}
                          {/*error*/}
                        </TableCell>
                        <TableCell align="left">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toFixed(0).toString()
                          )}
                          
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <Pagination
          count={(handleSearch()?.length / 30).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />{" "}
        {/* <AboutUs /> */}
        {/* <Footer /> */}

      </Container>
    </ThemeProvider>
  );
};
/* exported render */

export default CoinsTable;
