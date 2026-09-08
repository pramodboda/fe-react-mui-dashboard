import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ProUI_PageTitle({ title, subText }) {
    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
        <Box >
            <Typography variant="h3" component="h3" gutterBottom> Dashboard</Typography>
            < Typography component="h2" variant="h6" sx={{ mb: 2 }
            }>
                Overview
            </Typography >

        </Box>
        <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 2 }}>

            <Typography
                sx={{ color: "#43a047", fontSize: ".9rem", fontWeight: 500 }}
            >
                <Stack direction="row" alignItems="center" sx={{ gap: 1 }}>
                    <FiberManualRecordIcon
                        sx={{
                            fontSize: ".8rem",
                        }}
                    />
                    <span>Open to New Opportunities</span>
                </Stack>
            </Typography>
            <Button variant="contained">Get in Touch</Button>
        </Stack>


    </Stack >
}