import { Box, Button, Stack, IconButton, Typography } from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";

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
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem ",
        }}
      >
        <Box sx={{ width: "70%" }}>
          {" "}
          {title && <Typography>{title}</Typography>}
        </Box>
        <Box>
          {actions && (
            <>
              <IconButton>
                <CloseTwoToneIcon />
              </IconButton>
              <IconButton>
                <DownloadTwoToneIcon />
              </IconButton>
            </>
          )}
        </Box>
      </Stack>

      <Box sx={{ padding: "25px", backgroundColor: "#f9f9f9" }}>{children}</Box>
    </Box>
  );
};

export default ProUI_Card;
