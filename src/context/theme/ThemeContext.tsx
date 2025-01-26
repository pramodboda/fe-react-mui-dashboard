import React, { createContext, useState, ReactNode } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

import { blueGrey } from "@mui/material/colors";

// Define the shape of the context's data
interface ThemeContextProps {
  setPrimaryColor: (color: string) => void;
  setPrimaryFont: (font: string) => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// ThemeProvider component to provide context to children
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [primaryColor, setPrimaryColor] = useState<string>(deepPurple[500]);

  const [primaryFont, setPrimaryFont] = useState<string>(
    "Plus Jakarta Sans, Roboto, Helvetica, Arial, sans-serif"
  );

  // Global overrides
  const theme = createTheme({
    typography: {
      htmlFontSize: 18,
      fontSize: 14,

      fontFamily: primaryFont,
      // h1: {
      //   fontSize: "3.75rem", // 60px
      //   fontWeight: 700, // Bold, adjust as needed
      // },
      // h2: {
      //   fontSize: "3rem", // 48px
      //   fontWeight: 700,
      // },
      // h3: {
      //   fontSize: "2.5rem", // 40px
      //   fontWeight: 700,
      // },
      // h4: {
      //   fontSize: "2rem", // 32px
      //   fontWeight: 600,
      // },
      // h5: {
      //   fontSize: "1.75rem", // 28px
      //   fontWeight: 600,
      // },
      // h6: {
      //   // fontSize: "1.5rem", // 24px
      //   fontWeight: 600,
      // },
      body1: {
        fontSize: "1rem", // 16px
        fontWeight: 400, // Normal weight
      },
      body2: {
        fontSize: "0.875rem", // 14px
        fontWeight: 400,
        color: blueGrey[400],
      },
      // caption: {
      //   fontSize: "0.75rem", // 12px
      //   fontWeight: 400,
      // },
      // overline: {
      //   fontSize: "0.75rem", // 12px
      //   fontWeight: 400,
      //   textTransform: "uppercase", // often used for labels
      // },
      button: {
        fontSize: "0.875rem", // 14px
        fontWeight: 600,
        textTransform: "none", // Optional: turn off uppercase text transform for buttons
      },
    },
    palette: {
      primary: {
        main: primaryColor, // Dynamically change the primary color
      },
    },
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },

      MuiBackdrop: {
        styleOverrides: {
          root: {
            // backgroundColor: "transparent", // Remove backdrop background color
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none", // Remove shadow on focus
            outline: "none", // Remove outline on focus
            "&:hover": {
              boxShadow: "none", // Remove shadow on focus
              outline: "none", // Remove outline on focus
            },
            "&:focus": {
              boxShadow: "none", // Remove shadow on focus
              outline: "none", // Remove outline on focus
            },
            "&:active": {
              boxShadow: "none", // Remove shadow when button is active
            },
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            // boxShadow:
            //   // "0px 4px 16px rgba(0, 0, 0, 0.2), 0px 8px 32px rgba(0, 0, 0, 0.12)", // Beautiful shadow
            //   "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            // You can adjust the shadow for a more beautiful or custom effect
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ setPrimaryColor, setPrimaryFont }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
