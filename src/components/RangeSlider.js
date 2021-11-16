import  React from "react";
import { Box } from "@material-ui/core";
import { Slider } from "@material-ui/core";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
   const [value, setValue] = React.useState([0, 15]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 1200 }}>
      <Slider
      
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}

      />
    </Box>
  );
}
