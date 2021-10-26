import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Container>
          <Typography>BitMarket</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
