import { useState } from "react";
// import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useThemeContext } from "../../../hooks/useThemeContext"; // Adjust the import path as needed

const SetThemeFont = () => {
  const { setPrimaryFont } = useThemeContext(); // Access setColor from theme context

  // State to track which button is active (null means no button is active)
  const [activeIndex, setActiveIndex] = useState<number | null>(2);

  const fontOptions = [
    {
      id: 0,
      name: "Roboto",
      font: "Roboto, Helvetica, Arial, sans-serif",
    },
    {
      id: 1,
      name: "Roboto Condensed",
      font: "Roboto Condensed, Roboto, Helvetica, Arial, sans-serif",
    },
    {
      id: 2,
      name: "Plus Jakarta Sans",
      font: "Plus Jakarta Sans, Roboto, Helvetica, Arial, sans-serif",
    },
    { id: 3, name: "Amber" },
    { id: 4, name: "Green" },

    { id: 5, name: "Red" },
  ];

  // Function to handle button click and toggle active state

  const handleFontChange = (index: number, newFont: string) => {
     // Toggle the active state
     setActiveIndex(activeIndex === index ? -1 : index); // Toggle active state, -1 means no active button
     setPrimaryFont(newFont); // Update the color in the theme context
  }

  return (
    <>
      <Box>
        <Typography variant="body2">Theme Presets</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {/* Render multiple buttons with state management */}
        {/* {[0, 1, 2, 3, 4, 5].map((index) => ( */}
        {fontOptions.map((fontOption, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              width: 66,
              height: 66,

              backgroundColor: activeIndex === index ? "grey" : "white", // Change button color if active

              // backgroundColor:
              //   activeIndex === index ? colorOption.lightColor : "white", // Change button color if active

              boxShadow: "none",
              // "&:hover": {
              //   backgroundColor: activeIndex === index ? "#cccccc" : "#f0f0f0",
              // },
            }}
            onClick={() => handleFontChange(index, fontOption.font)} // Activate or deactivate button on click
          >
            {fontOption.name}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default SetThemeFont;
