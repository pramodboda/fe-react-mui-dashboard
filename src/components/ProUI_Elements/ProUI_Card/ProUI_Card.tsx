import {Box} from "@mui/material";

interface CustomCardProps {
    title?: string;
    subheader?: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
    sx?: object;
  }


const ProUI_Card:React.FC<CustomCardProps> = ({title, children}) => {
    return (<Box sx={{backgroundColor: "#f9f9f9"}}>
        {title&&title}
{children}
    </Box>)
}

export default ProUI_Card