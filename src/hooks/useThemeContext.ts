// useThemeContext Hook: This custom hook encapsulates the logic for accessing the ThemeContext and provides a clean API for consuming the context in components.

// Context-Driven Theme Management: This pattern helps in managing theme state globally (e.g., color modes or color schemes) and makes it easily accessible from any component that consumes the context.

// Error Handling: The useThemeContext hook throws an error if it’s used outside of a ThemeProvider. This helps avoid bugs where the context is not properly provided.

import { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext"; // Adjust the import path as needed

// Define the return type of the hook
// Define the shape of the context's data
interface ThemeContextProps {
  primaryColor: string,
  primaryFont : string,
  setPrimaryColor: (color: string) => void;// Function to update the primary color
  setPrimaryFont: (font: string) => void;// Function to update the primary font
}

// The custom hook to use the theme context
export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};
