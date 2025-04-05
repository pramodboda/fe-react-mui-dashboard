import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import ProUI_SignInCard from "../../../components/ProUI_Elements/ProUI_SignInCard/ProUI_SignInCard";

const ProUI_SignInSide: React.FC = () => {
  return (
    <>
      <Stack
        sx={{ alignItems: "stretch", height: "100vh", flexDirection: "row" }}
        className="login-container"
      >
        <Box
          className="login-left"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            width: "45%",
          }}
        >
          {/* <img src={loginLeftBg} alt="" /> */}
        </Box>
        <Stack
          className="login-right"
          sx={{
            justifyContent: "center",
            width: { xs: "100%", sm: "100%", md: "55%" },
            padding: { xs: "1rem", sm: "12rem", md: "8rem", lg: "10rem" },
            // gap: { xs: 6, sm: 12 },
          }}
        >
          <ProUI_SignInCard />
        </Stack>
      </Stack>
    </>
  );
};
export default ProUI_SignInSide;
