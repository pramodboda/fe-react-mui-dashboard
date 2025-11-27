import { useState } from 'react'
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { ThemeProvider as MuiThemeProvider } from "./context/theme/ThemeContext";
import { SettingsDrawerProvider } from "./context/SettingsDrawerContext";
import DashboardLayout from "./layout/DashboardLayout";
// import Signin_1 from "./pages/Auth/Signin_1";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

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
    </>
  )
}

export default App
