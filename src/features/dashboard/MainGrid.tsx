// Key Metrics Summary: Showcases  cards with KPIs like Statics, Total users, revenue, Orders Active sessions and etc.
import * as React from "react";
import Grid from "@mui/material/Grid2";

import { Card, CardActionArea, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import Copyright from "../internals/components/Copyright";
import ChartUserByCountry from "../../components/ProUI_Elements/Charts/ChartUserByCountry/ChartUserByCountry";
import CustomizedDataGrid from "../../components/ProUI_Elements/Charts/CustomizedDataGrid/CustomizedDataGrid";
// import HighlightedCard from "./HighlightedCard";
import PageViewsBarChart from "../../components/ProUI_Elements/Charts/PageViewsBarChart/PageViewsBarChart";
import SessionsChart from "../../components/ProUI_Elements/Charts/SessionsChart/SessionsChart";
import StatCard, {
  StatCardProps,
} from "../../components/ProUI_Elements/ProUI_KPICard/ProUI_KPICard";

const data: StatCardProps[] = [
  {
    title: "Users",
    value: 14,
    sign: "",
    numUnit: "k",
    interval: "Last 30 days",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: "Conversions",
    value: 325,
    sign: "",
    numUnit: "",
    interval: "Last 30 days",
    trend: "down",
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600,
      820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300,
      220,
    ],
  },
  {
    title: "Event count",
    value: 200,
    sign: "",
    numUnit: "k",
    interval: "Last 30 days",
    trend: "neutral",
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510,
      530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export default function MainGrid() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />

          </Grid>
        ))}
        {/* <Grid size={{ xs: 12, sm: 6, lg: 3 }}><HighlightedCard /></Grid> */}
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Link
                href="https://pramodboda.github.io/3d-apple-watch-ultra-orange-v2/"
                traget="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Stack
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#eeeeee",
                  }}
                >
                  <Typography
                    className="text-pop-up-top"
                    variant="h2"
                    sx={{
                      textAlign: "center",
                      color: "#f9f9f9",
                      fontWeight: 700,
                    }}
                  >
                    P
                  </Typography>
                  <Typography variant="body2">
                    Check out 3D Web projects
                  </Typography>
                </Stack>
              </Link>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        A powerful data grid
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: "column", sm: "row", lg: "column" }}>
            {/* <CustomizedTreeView /> */}
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>
      {/* <Copyright sx={{ my: 4 }} /> */}
    </Box>
  );
}
