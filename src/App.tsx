// import { useState } from "react";

// import { ThemeProvider } from "@mui/material/styles";

import {RouterProvider } from "react-router-dom";
import router from "./routes/routes";

import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider as MuiThemeProvider } from "./context/theme/ThemeContext";
import { SettingsDrawerProvider } from "./context/SettingsDrawerContext";
// import theme from "./styles/theme";

import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
// import Signin_1 from "./pages/Auth/Signin_1";

function App() {
  return (
     <MuiThemeProvider>
      <SettingsDrawerProvider>
        <AuthProvider>
        <RouterProvider router={router}>
            <DashboardLayout />
            {/* <Signin_1 /> */}
            </RouterProvider >
        </AuthProvider>
      </SettingsDrawerProvider>
      </MuiThemeProvider>  
  );
}

export default App;
