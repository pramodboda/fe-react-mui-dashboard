import React, { useState } from "react";
import { Button } from "@mui/material";

const ProUI_BrowserFullscreen: React.FC = () => {
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
      <Button variant="contained" color="primary" onClick={toggleFullscreen}>
        {isFullscreen ? "Exit Full Screen" : "Go Full Screen"}
      </Button>
    </div>
  );
};

export default ProUI_BrowserFullscreen;
