import React from "react";
import {NavLink} from "react-router-dom";
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
        <Typography variant="body2">
          {currentYear} © Developed by Pramod Boda Inc.
        </Typography>
        <br/>
        <NavLink to={sitemap}></NavLink>
      </Stack>
    </>
  );
};
export default Footer_1;
