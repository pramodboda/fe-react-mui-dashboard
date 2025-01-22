import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signin_1: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Stack direction="row" className="login-container">
        <Box className="login-left">
          {/* <img src={loginLeftBg} alt="" /> */}
        </Box>
        <Box className="login-right">
          <Stack>
            <Typography variant="h5" sx={{ fontWeight: "700", mb: 6 }}>
              Sign in to your account
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Alert severity="info">
                Use "pramodboda@dev.com" as username and "demo0123456789" as
                password.
              </Alert>
            </Box>

            <Box
              component="form"
              sx={{ mb: 6, "& .MuiTextField-root": { mb: 2, width: "100%" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                // error
                id="outlined-error-helper-text"
                label="Email address"
                defaultValue="pramodboda@dev.com"
                type="email"
                // helperText="Incorrect entry."
                // size="small"
              />
              <Box sx={{ textAlign: "right" }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <Link href="#">Forgot password?</Link>
                </Typography>
              </Box>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  defaultValue="demo0123456789"
                />
              </FormControl>
            </Box>
            <Button variant="contained">Sign in</Button>
            <Typography variant="body2" sx={{ textAlign: "center", mt: 6 }}>
              Don't have an account? <Link href="#">Sign up</Link>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
export default Signin_1;
