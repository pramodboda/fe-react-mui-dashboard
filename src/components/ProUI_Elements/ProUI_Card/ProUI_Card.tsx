import { Box, Button, Stack, IconButton, Typography } from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import CopyAllTwoToneIcon from "@mui/icons-material/CopyAllTwoTone";

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
    <Box sx={{ backgroundColor: "#f9f9f9", mb: 2 }}>
      <Box
        sx={{
          // flexDirection: "row",
          // justifyContent: "space-between",
          // alignItems: "center",
          position: "relative",
          padding: "1rem ",
        }}
      >
        <Box sx={{ width: "65%" }}>
          {" "}
          {title && <Typography>{title}</Typography>}
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "0.8rem 0.6rem",
          }}
        >
          {actions && (
            <>
              <IconButton size="small">
                <CopyAllTwoToneIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small">
                <CloseTwoToneIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small">
                <DownloadTwoToneIcon fontSize="inherit" />
              </IconButton>
            </>
          )}
        </Box>
      </Box>

      <Box sx={{ padding: "15px", backgroundColor: "#f9f9f9" }}>{children}</Box>
    </Box>
  );
};

export default ProUI_Card;
