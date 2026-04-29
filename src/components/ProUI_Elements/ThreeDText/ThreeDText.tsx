import "./ThreeDText.css";

import Box from "@mui/material/Box";

export default function ThreeDText({text}){

    return(
        <Box sx={{height: "80vh", position: "relative"}}>
        <span className="threeD_text">{text?text:"Your text here"}</span>
        </Box>)
    
}