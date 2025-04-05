import React, { useEffect } from "react";

import {Stack, Button, Typography} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AutoLoadToastDrawer from "../components/ProUI_Elements/Toasts/AutoLoadToastDrawer";
import MainGrid from "../features/dashboard/MainGrid";

const Dashboard_Home1: React.FC = () => {
  return (
    <>
      {/* Key Metrics Summary - Start */}
      <Stack direction="row" alignItems="center" sx={{ gap: 2 }}>
                <Button variant="contained">Get in Touch</Button>
                <Typography
                  sx={{ color: "#43a047", fontSize: ".9rem", fontWeight: 500 }}
                >
                  <Stack direction="row" alignItems="center" sx={{ gap: 1 }}>
                    <FiberManualRecordIcon
                      sx={{
                        fontSize: ".8rem",
                      }}
                    />
                    <span>Open to New Opportunities</span>
                  </Stack>
                </Typography>
              </Stack>
      <AutoLoadToastDrawer />
      <MainGrid />
      {/* Key Metrics Summary - End */}
    </>
  );
};

export default Dashboard_Home1;
