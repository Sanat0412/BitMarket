import { makeStyles } from "@material-ui/core";
import React from "react";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
      selectbutton:{
          border: "1px solid skyblue",
          borderRadius: 5,
          padding: 10,
            margin: 5,
          paddingLeft: 20,
            paddingRight: 20,
            cursor: "pointer",
            backgroundColor: selected ? "skyblue" : "",
            color: selected ? "black" : "",
            fontWeight: selected ? "bold" : " ",
            "&:hover":{
                backgroundColor: "skyblue",
                color: "black",
            },width: "20%"

      }
  });
  const classes = useStyles();
  return (
    <div>
      <span onClick={onClick} className={classes.selectbutton}>
        {children}
      </span>
      
    </div>
  );
};

export default SelectButton;
