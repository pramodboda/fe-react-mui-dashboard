// import { useState } from "react";

// import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider as MuiThemeProvider } from "./context/theme/ThemeContext";
import { SettingsDrawerProvider } from "./context/SettingsDrawerContext";
// import theme from "./styles/theme";

import "./App.css";
import Dashboard from "./pages/Dashboard";
// import Signin_1 from "./pages/Auth/Signin_1";

function App() {
  return (
    <>
      <SettingsDrawerProvider>
        <AuthProvider>
          <MuiThemeProvider>
            <Dashboard />
            {/* <Signin_1 /> */}
          </MuiThemeProvider>
        </AuthProvider>
      </SettingsDrawerProvider>
    </>
  );
}

export default App;
