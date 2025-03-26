
import Grid from "@mui/material/Grid2";
import {Box, Typography} from "@mui/material";
// import { title } from "framer-motion/client";

const sitemap_data = [{
title: "Pages",
subpages: ["Buttons"]
}]

const SitemapPage: React.FC = () => {
return <Box><Grid container spacing={2}>
    {sitemap_data.map((i)=> {<Grid><Typography>{i.title}</Typography></Grid>})}
    
    </Grid></Box>
}

export default SitemapPage;