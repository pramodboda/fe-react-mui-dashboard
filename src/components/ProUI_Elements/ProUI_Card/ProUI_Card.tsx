import { Box, Button, IconButton } from "@mui/material";

interface CustomCardProps {
  title?: string;
  subheader?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  sx?: object;
}

const ProUI_Card: React.FC<CustomCardProps> = ({
  title,
  actions,
  children,
}) => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9" }}>
      {title && title}
      {actions && <IconButton>A</IconButton>}
      <Box sx={{ padding: "25px", backgroundColor: "#f9f9f9" }}>{children}</Box>
    </Box>
  );
};

export default ProUI_Card;
