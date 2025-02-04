import { useState, useEffect } from "react";
// import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { useThemeContext } from "../../../hooks/useThemeContext"; // Adjust the import path as needed
import {
  indigo,
  blue,
  deepPurple,
  amber,
  green,
  red,
} from "@mui/material/colors";

// import ColorChangeIconImg from "../../../assets/icons/ic-siderbar-duotone.svg";

import IconSidebarDuotone from "../../../assets/icons/IconSidebarDuotone";

const SetThemeColor = () => {
  const { primaryColor, setPrimaryColor } = useThemeContext(); // Access setPrimaryColor from theme context

  // State to track which button is active (null means no button is active)
  const [activeIndex, setActiveIndex] = useState<number | null>(2);

  type ColorInfo = {
    id: number;
    name: string;
    color: string;
    lightColor: string;
  };

  const colorOptions: ColorInfo[] = [
    { id: 0, name: "Indigo", color: indigo[500], lightColor: indigo[50] },
    { id: 1, name: "Blue", color: blue[500], lightColor: blue[50] },
    {
      id: 2,
      name: "Deep Purple",
      color: deepPurple[500],
      lightColor: deepPurple[50],
    },
    { id: 3, name: "Amber", color: amber[500], lightColor: amber[50] },
    { id: 4, name: "Green", color: green[500], lightColor: green[50] },

    { id: 5, name: "Red", color: red[500], lightColor: red[50] },
  ];

  // Set activeIndex based on primaryColor when component mounts
  useEffect(() => {
    const activeIndex = colorOptions.findIndex(
      (option) => option.color === primaryColor
    );
    setActiveIndex(activeIndex !== -1 ? activeIndex : null); // If no match, set to null
  }, [primaryColor]); // Runs whenever primaryColor changes

  // Function to handle button click and toggle active state
  const handleColorChange = (index: number, newColor: string) => {
    setActiveIndex(index); // Set active button index
    setPrimaryColor(newColor); // Update the color in the theme context
  };

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
        {colorOptions.map((colorOption, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              width: 66,
              height: 66,
              // backgroundColor: colorOptions.find(
              //   (option) => option.color === primaryColor
              // )
              //   ? colorOption.lightColor
              //   : "white",
              backgroundColor:
                activeIndex === index ? colorOption.lightColor : "white", // Check if this is the active button
              boxShadow: "none",
              // "&:hover": {
              //   backgroundColor: activeIndex === index ? "#cccccc" : "#f0f0f0",
              // },
            }}
            onClick={() => handleColorChange(index, colorOption.color)} // Activate or deactivate button on click
          >
            <SvgIcon
              sx={{
                width: 28,
                height: 28,
                fill: colorOption.color, // Change icon color based on active state
              }}
            >
              <IconSidebarDuotone iconColor={colorOption.color} />
            </SvgIcon>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default SetThemeColor;
