import React from "react";
import {NavLink} from "react-router-dom";
import {Stack,Typography,Link} from "@mui/material";
import { useCurrentYear } from "../../../hooks/useCurrentYear";


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
        
        <NavLink to="/sitemap"><Link>Sitemap
        </Link></NavLink>
      </Stack>
    </>
  );
};
export default Footer_1;
