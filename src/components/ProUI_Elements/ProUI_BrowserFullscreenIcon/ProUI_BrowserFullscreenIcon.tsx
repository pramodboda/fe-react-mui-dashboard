import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";

import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

const ProUI_BrowserFullscreenIcon: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Function to toggle fullscreen
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // ========= Ignore the errors =========

      // Enter fullscreen mode
      const element = document.documentElement; // or use a specific element
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        // Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        // Chrome, Safari, Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        // IE/Edge
        element.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari, Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div>
      <IconButton
        aria-label="settings"
        color="inherit"
        onClick={toggleFullscreen}
      >
        {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </div>
  );
};

export default ProUI_BrowserFullscreenIcon;
