import { Card, Box, Stack, Button, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import Grid from "@mui/material/Grid";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { FaLayerGroup } from "react-icons/fa6";

import ProUI_Card from "../../components/ProUI_Elements/ProUI_Card/ProUI_Card";

const severityColors = {
  success: "#00B86B",
  error: "#FF4D4F",
  warning: "#FFAA00",
  info: " #0080ff",
  primary: "#735DF5",
};
const tasks = [
  {
    title: "Group lunch celebration",
    due: "Due in 2 Days",
    change: "+28%",
    severity: "warning",
  },
  {
    title: "Navigation optimization",
    due: "Due in 2 Days",
    change: "+50%",
    severity: "success",
  },
  {
    title: "Rebrand strategy planning",
    due: "Due in 5 Days",
    change: "-27%",
    severity: "error",
  },
  {
    title: "Product goals strategy",
    due: "Due in 7 Days",
    change: "+8%",
    severity: "info",
  },
  {
    title: "Product goals strategy",
    due: "Due in 7 Days",
    change: "+8%",
    severity: "",
    color: "primary",
  },
];

const ListsPage: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, lg: 4 }}>
        <Link href="https://preview.keenthemes.com/metronic8/demo1/widgets/lists.html">
          Metronic Ref
        </Link>
        <ProUI_Card>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </ProUI_Card>
      </Grid>
      <Grid size={{ xs: 12, lg: 4 }}>
        <ProUI_Card title="Notification" actions="true">
          <Stack spacing={2}>
            {tasks.map((task, index) => (
              <Alert
                key={index}
                severity={task.severity}
                color={task.color}
                icon={<FaLayerGroup />}
                sx={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: 2,
                  // backgroundColor: "rgba(255, 255, 255, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  "& .MuiAlert-message": { flexGrow: 1 },
                }}
              >
                <Stack
                  sx={{
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  direction="row"
                >
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      {task.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      sx={{ color: "#999" }}
                    >
                      {task.due}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontWeight={600}
                      sx={{ color: severityColors[task.severity] }}
                    >
                      {task.change}
                    </Typography>
                  </Box>
                </Stack>
              </Alert>
            ))}
          </Stack>
        </ProUI_Card>

        {/* 
        <Stack spacing={2}>
          {tasks.map((task, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 2,
                  p: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    opacity: 0.9,
                  },
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box sx={{ pr: 1.5 }}>{task.icon}</Box>
                      <Box>
                        <Typography fontWeight={600}>{task.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {task.due}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                  <Typography fontWeight={600} color={task.changeColor}>
                    {task.change}
                  </Typography>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </Stack> */}
      </Grid>
    </Grid>
  );
};

export default ListsPage;
