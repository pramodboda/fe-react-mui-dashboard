import React from "react";
import { useSettingsDrawer } from "../../../context/SettingsDrawerContext"; // Import the custom hook

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import ProUI_BrowserFullscreenIcon from "../ProUI_BrowserFullscreenIcon/ProUI_BrowserFullscreenIcon";
import SetThemeColor from "../../../features/settings/themeColor/SetThemeColor";

const SettingsDrawer: React.FC = () => {
  const { isSettingsDrawerOpen, handleToggleSettingsDrawer } =
    useSettingsDrawer(); // Access the drawer open state

  return (
    <Drawer
      // variant="persistent"
      anchor="right"
      open={isSettingsDrawerOpen}
      onClose={handleToggleSettingsDrawer}
      sx={{
        zIndex: 1202,
        backgroundColor: "transparent",
        "& .MuiBackdrop-root": {
          backgroundColor: "transparent",
        },

        "& .MuiDrawer-paper": {
          backdropFilter: "blur(8px)", // Apply blur effect
          backgroundColor: "rgba(255, 255, 255, 0.5)", // White with opacity for frosted look
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", // Custom shadow
        },
      }}
    >
      <Box
        sx={{ width: 250, padding: "1rem 1rem" }}
        role="presentation"
        // onClick={handleToggleSettingsDrawer}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center" }}
          // onClick={handleToggleSettingsDrawer}
        >
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            Settings
          </Typography>
          <ProUI_BrowserFullscreenIcon />
          <IconButton
            aria-label="settings"
            color="inherit"
            onClick={handleToggleSettingsDrawer}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <SetThemeColor />
        <Divider />
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
