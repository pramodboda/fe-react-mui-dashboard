import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { grey } from "@mui/material/colors";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ProUI_PageTitle({ title, subText }) {
    return (
        <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <Box >
                <Typography variant="h3" component="h3" gutterBottom> {title}</Typography>
                < Typography component="h6" variant="h6" sx={{ mb: 2, color: grey[600] }
                }>
                    {subText}
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
                <Button variant="contained" sx={{ borderRadius: "100px" }}>Get in Touch</Button>
            </Stack>
        </Stack >
    )

}