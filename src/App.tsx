// import { useState } from "react";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

import { AuthProvider } from "./context/AuthContext";
import { CssBaseline, GlobalStyles } from "@mui/material";

import { ThemeProvider as MuiThemeProvider } from "./context/theme/ThemeContext";
import { SettingsDrawerProvider } from "./context/SettingsDrawerContext";

import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
// import Signin_1 from "./pages/Auth/Signin_1";

function App() {
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <SettingsDrawerProvider>
        <AuthProvider>
          <RouterProvider router={router}>
            <DashboardLayout />
            {/* <Signin_1 /> */}
          </RouterProvider>
        </AuthProvider>
      </SettingsDrawerProvider>
    </MuiThemeProvider>
  );
}

export default App;
