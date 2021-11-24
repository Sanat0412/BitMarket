import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";

const usestyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));
function App() {
  const classes = usestyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coin/:id" component={CoinPage} exact />
        <Footer />
        {/* <Route path="/coin/:dogecoin" component={CoinPage} exact /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
