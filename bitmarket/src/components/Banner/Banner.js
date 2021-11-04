import { Container, makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(/src/banner.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
}));
const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}> </Container>
    </div>
  );
};

export default Banner;
