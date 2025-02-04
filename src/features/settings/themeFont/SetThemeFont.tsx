import { useState } from "react";
// import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useThemeContext } from "../../../hooks/useThemeContext"; // Adjust the import path as needed

const SetThemeFont = () => {
  const { primaryFont,setPrimaryFont } = useThemeContext(); // Access setPrimaryFont from theme context

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
    { id: 3, name: "Inter", font: "Inter, Roboto, Helvetica, Arial, sans-serif"},
    { id: 4, name: "Poppins", font: "Poppins, Roboto, Helvetica, Arial, sans-serif" },

    { id: 5, name: "Rubik", font: "Rubik, Roboto, Helvetica, Arial, sans-serif" },
  ];

  // Function to handle button click and toggle active state
  const handleFontChange = (index: number, newFont: string) => {
     // Toggle the active state
    // if (newFont === null) {
    //   setActiveIndex(null); // No active font
    //   setPrimaryFont("Plus Jakarta Sans, Roboto, Helvetica, Arial, sans-serif"); // Set back to default
    // } else {
    //   setActiveIndex(index); // Activate the selected font
    //   setPrimaryFont(newFont); // Update the font in the theme context
    // }


    // Check if the font is valid (not undefined)
  if (newFont) {
    setActiveIndex(index); // Activate selected font
    setPrimaryFont(newFont); // Update the font in theme context
  } else {
    console.error("Invalid font selection!");
  }
  }

  return (
    <>
      <Box>
        <Typography variant="body2">Font Family</Typography>
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
        {fontOptions.map((fontOption, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              width: 66,
              height: 66,
              fontFamily: fontOption.font,
              color: "#999999",
              // backgroundColor: activeIndex === index ? "#cccccc" : "white", // Change button color if active
              backgroundColor: primaryFont === fontOption.font ? "#cccccc" : "white", // Set active button based on context value
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
