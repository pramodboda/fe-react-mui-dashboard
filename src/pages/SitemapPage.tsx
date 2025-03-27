
import Grid from "@mui/material/Grid2";
import {Box, Typography} from "@mui/material";

import { NavLink } from "react-router-dom";
// import { title } from "framer-motion/client";

const sitemap_data = [{
    title: "Dashboard",
    subpages: ["DashboardHome1"]
    },{
title: "Pages",
subpages: ["Buttons"]
}]

const SitemapPage: React.FC = () => {
return <Box>
    <Typography variant="h6" sx={{textTransform: "Uppercase"}}>
    Sitemap
    </Typography>
    <Grid container spacing={2}>
    {sitemap_data.map((i)=> { return <Grid size={{xs:12, md:3}}><Typography >{i.title}</Typography> <ul>{i.subpages.map((sb)=>{return <li><NavLink to=`/${{sb}}`>{sb}</NavLink></li>})}</ul></Grid>})}
    
    </Grid></Box>
}

export default SitemapPage;