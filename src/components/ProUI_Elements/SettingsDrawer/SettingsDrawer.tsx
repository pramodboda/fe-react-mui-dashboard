import React from "react";
import { useSettingsDrawer } from "../../../context/SettingsDrawerContext"; // Import the custom hook

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

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
      sx={{ zIndex: 1202 }}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        // onClick={handleToggleSettingsDrawer}
      >
        <SetThemeColor />
        <Divider />
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
