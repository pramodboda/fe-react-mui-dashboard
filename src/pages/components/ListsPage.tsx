import { Box, Stack, Button, Link } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import Grid from "@mui/material/Grid2";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { FaLayerGroup } from "react-icons/fa6";

import ProUI_Card from "../../components/ProUI_Elements/ProUI_Card/ProUI_Card";

const ListsPage: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, lg: 3 }}>
        <Link href="https://preview.keenthemes.com/metronic8/demo1/widgets/lists.html">Metronic Ref</Link>
        <ProUI_Card>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
      <Grid size={{ xs: 12, lg: 3 }}>
        <ProUI_Card title="Notification" actions="true">
          <Box>
            <List>
              <ListItem>

                <Alert icon={<FaLayerGroup />} sx={{ width: '100%' }} severity="warning">
                  <AlertTitle>
                    Group lunch celebration
                  </AlertTitle>
                  Due in 2 Days
                </Alert>
              </ListItem>
              <ListItem>
                <Alert icon={<FaLayerGroup />} sx={{ width: '100%' }} severity="success">
                  <AlertTitle>
                    Group lunch celebration
                  </AlertTitle>
                  Due in 2 Days
                </Alert>
              </ListItem>
              <ListItem>
                <Alert icon={<FaLayerGroup />} sx={{ width: '100%' }} severity="error">
                  <AlertTitle>
                    Group lunch celebration
                  </AlertTitle>
                  <Stack>
                    <Box>Due in 2 Days</Box>
                    <Box>-27%</Box>
                  </Stack>

                </Alert>
              </ListItem>
              <ListItem>
                <Alert icon={<FaLayerGroup />} sx={{ width: '100%' }} severity="success" color="primary">
                  <AlertTitle>
                    Group lunch celebration
                  </AlertTitle>
                  Due in 2 Days
                </Alert>
              </ListItem>
            </List>
          </Box>

        </ProUI_Card>
      </Grid>

    </Grid>
  );
};

export default ListsPage;
