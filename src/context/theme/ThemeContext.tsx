import React, { createContext, useState, ReactNode } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { purple } from "@mui/material/colors";

// Define the shape of the context's data
interface ThemeContextProps {
  setPrimaryColor: (color: string) => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// ThemeProvider component to provide context to children
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [primaryColor, setPrimaryColor] = useState<string>(purple[500]);

  const theme = createTheme({
    typography: {
      fontFamily: "Plus Jakarta Sans, Roboto, Helvetica, Arial, sans-serif",
      h1: {
        fontSize: "3.75rem", // 60px
        fontWeight: 700, // Bold, adjust as needed
      },
      h2: {
        fontSize: "3rem", // 48px
        fontWeight: 700,
      },
      h3: {
        fontSize: "2.5rem", // 40px
        fontWeight: 700,
      },
      h4: {
        fontSize: "2rem", // 32px
        fontWeight: 600,
      },
      h5: {
        fontSize: "1.75rem", // 28px
        fontWeight: 600,
      },
      h6: {
        fontSize: "1.5rem", // 24px
        fontWeight: 600,
      },
      body1: {
        fontSize: "1rem", // 16px
        fontWeight: 400, // Normal weight
      },
      body2: {
        fontSize: "0.875rem", // 14px
        fontWeight: 400,
      },
      caption: {
        fontSize: "0.75rem", // 12px
        fontWeight: 400,
      },
      overline: {
        fontSize: "0.75rem", // 12px
        fontWeight: 400,
        textTransform: "uppercase", // often used for labels
      },
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
    },
  });

  return (
    <ThemeContext.Provider value={{ setPrimaryColor }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
