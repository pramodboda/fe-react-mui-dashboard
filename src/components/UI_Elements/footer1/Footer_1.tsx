import React from "react";
import { useCurrentYear } from "../../../hooks/useCurrentYear";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Footer_1: React.FC = () => {
  const currentYear = useCurrentYear();
  return (
    <>
      <Stack
        sx={{ bgcolor: "#fff", width: "100%", border: "1px solid red", p: 3 }}
      >
        <Typography>{currentYear} ©Pramod Boda Inc.</Typography>
      </Stack>
    </>
  );
};
export default Footer_1;
