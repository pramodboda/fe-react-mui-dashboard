import { ReactNode } from 'react';
import Grid from "@mui/material/Grid2";
import {Box, Typography} from "@mui/material";

import { NavLink } from "react-router-dom";
// import { title } from "framer-motion/client";

// Define proper types for your menu items
// type PageItem = {
//   title: string;
//   subpages: any;
//   url: string;
//   icon?: ReactNode;
//   // level: number;
//   path?: string;
//   // children?: PageItem[];
// };

const sitemap_data = [{
    title: "Dashboard",
    subpages: [{title:"Dashboard_Home1", url:"Dashboard_Home1"}]
    },{
title: "Pages",
subpages: [{title:"Buttons", url:"ButtonsPage"}]
},{
    title: "Utils",
    subpages: ["Timelines"]
    }]

const SitemapPage: React.FC = () => {
return <Box>
    <Typography variant="h6" sx={{textTransform: "Uppercase"}}>
    Sitemap
    </Typography>
    <Grid container spacing={2}>
    {/* {sitemap_data.map((i)=> { return <Grid size={{xs:12, md:3}}><Typography >{i.title}</Typography> <ul>{i.subpages.map((sb)=>{return <li><NavLink to=${`/{sb}`}>{sb}</NavLink></li>})}</ul></Grid>})} */}
    

    {sitemap_data.map((item, index) => (
    <Grid item key={index} xs={12} md={3} lg={3}>  {/* Added 'item' prop and key */}
    <Typography>{item.title}</Typography>
   {/* {item.subpages.map((pg, pgIndex)=> <p key={pgIndex}>{pg}</p>)} */}
  </Grid>
))}

    </Grid></Box>
}

export default SitemapPage;

{/* <NavLink to={`/${page.url}`}>{page.title}</NavLink> */}