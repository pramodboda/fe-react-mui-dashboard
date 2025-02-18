import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import Divider from "@mui/material/Divider";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import ProUI_ForgotPassword from "../../../components/ProUI_Elements/ProUI_ForgetPassword/ProUI_ForgetPassword";
import {
  GoogleIcon,
  FacebookIcon,
} from "../../../components/ProUI_Elements/ProUI_CustomIcons/ProUI_CustomIcons";

const ProUI_SignInCard: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  // const [emailError, setEmailError] = React.useState(false);
  // const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  // const [passwordError, setPasswordError] = React.useState(false);
  // const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [openForgotPasswordDialog, setOpenForgotPasswordDialog] =
    React.useState(false);

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

  // const handleClickOpenForgotPasswordDialog = () => {
  //   setOpenForgotPasswordDialog(true);
  // };

  const handleCloseForgotPasswordDialog = () => {
    setOpenForgotPasswordDialog(false);
  };

  // const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   if (emailError || passwordError) {
  //     event.preventDefault();
  //     return;
  //   }
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <Stack>
      <Typography variant="h5" sx={{ fontWeight: "700", mb: 6 }}>
        Sign in to your account
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Alert severity="info">
          Use "pramodboda@dev.com" as username and "demo0123456789" as password.
        </Alert>
      </Box>

      <Box
        component="form"
        sx={{ mb: 3, "& .MuiTextField-root": { mb: 2, width: "100%" } }}
        noValidate
        autoComplete="off"
        // onSubmit={handleLoginSubmit}
      >
        <TextField
          // error
          id="outlined-error-helper-text"
          label="Email address"
          defaultValue="pramodboda@dev.com"
          type="email"
          // helperText="Incorrect entry."
          size="small"
        />
        {/* <Box sx={{ textAlign: "right" }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <Link href="#">Forgot your password?</Link>
                </Typography>
              </Box> */}

        <ProUI_ForgotPassword
          open={openForgotPasswordDialog}
          handleClose={handleCloseForgotPasswordDialog}
        />

        <FormControl
          sx={{ width: "100%", mb: 3 }}
          variant="outlined"
          size="small"
        >
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
                    showPassword ? "hide the password" : "display the password"
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

        <Box sx={{ mb: 3, backgroundColor: "#1e1e1e", borderRadius: "6px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "inherit",
              width: "100%",
              color: "#f9f9f9",
              fontWeight: 700,
            }}
          >
            Sign in
          </Button>
        </Box>
        {/* <Button variant="contained" sx={{ mb: 3 }}>
              Sign in
            </Button> */}
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Don't have an account? <Link href="#">Sign up</Link>
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }}>
          <Typography variant="body2" sx={{ mt: -0.6 }}>
            {" "}
            or
          </Typography>
          {/* <Chip label="or" size="small" /> */}
        </Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert("Sign in with Google")}
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert("Sign in with Facebook")}
            startIcon={<FacebookIcon />}
          >
            Sign in with Facebook
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default ProUI_SignInCard;
