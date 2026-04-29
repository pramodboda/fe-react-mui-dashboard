import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import ProUI_SignInCard from "../../../components/ProUI_Elements/ProUI_SignInCard/ProUI_SignInCard";

const ProUI_SignInSide: React.FC = () => {
  return (
    <>
      <Stack
        sx={{ height: "100vh", flexDirection: "row" }}
        className="login-container"
      >
        <Box
          sx={{
            position: "relative",
            width: "90%",
            height: "100%",
            display: { xs: "none", md: "block" },
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1770747501164-d5968578eb3f?q=80&w=1032&auto=format&fit=crop")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.3)", // 🔥 dark overlay
            }}
          />
        </Box>
        <Stack
          className="login-right"
          sx={{
            justifyContent: "center",
            width: { xs: "100%", sm: "100%", md: "55%" },
            padding: { xs: "1rem", sm: "12rem", md: "8rem", lg: "6rem" },
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
