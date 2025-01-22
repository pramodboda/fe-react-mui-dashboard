import React, { useMemo } from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from "@mui/material";
import { useThemeContext } from "../../../hooks/useThemeContext"; // Adjust the import path as needed
import { purple, green, blue, red, orange, teal } from "@mui/material/colors";

// import ColorChangeIconImg from "../../../assets/icons/ic-siderbar-duotone.svg";

const SetThemeColor = () => {
  const { setPrimaryColor } = useThemeContext(); // Access setColor from theme context

  const colorOptions = [
    { name: "Purple", color: purple[500] },
    { name: "Green", color: green[500] },
    { name: "Blue", color: blue[500] },
    { name: "Red", color: red[500] },
    { name: "Orange", color: orange[500] },
    { name: "Teal", color: teal[500] },
  ];

  const handleColorChange = (newColor: string) => {
    setPrimaryColor(newColor); // Update the color in the theme context
  };
  // Define the styled component outside of the hook
  // const ColorChangeIcon = styled.span`
  //   flex-shrink: 0;
  //   display: inline-flex;
  //   background-color: currentcolor;
  //   mask: url("/assets/icons/ic-siderbar-duotone.svg") center center / contain
  //     no-repeat;
  //   width: 28px;
  //   height: 28px;
  //   color: currentcolor;
  // `;

  // Define the styled component outside of the render function
  interface ThemeIconProps {
    color: string;
  }

  const ColorChangeIcon = styled.span<ThemeIconProps>`
    background-color: currentcolor;
    width: 28px;
    height: 28px;
    mask: url("/assets/icons/theme-icon.svg") center center / contain no-repeat;
    color: ${(props) => props.color};
  `;

  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="color selection"
    >
      {colorOptions.map((option) => (
        // <Button
        //   key={option.name}
        //   style={{ backgroundColor: option.color }}
        //   onClick={() => handleColorChange(option.color)} // Update theme color
        // >
        //   {option.name}
        // </Button>
        <Button
          key={option.name}
          style={{ backgroundColor: option.color }}
          onClick={() => handleColorChange(option.color)} // Update theme color
        >
          {/* <span> */}
          <div>
            <ColorChangeIcon color={option.color} />
          </div>
          {/* </span> */}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default SetThemeColor;
