import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";

function App() {
  const styles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100bh",
    },
  }));
  const Classes = styles();
  return (
    <BrowserRouter>
      <div className={Classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
