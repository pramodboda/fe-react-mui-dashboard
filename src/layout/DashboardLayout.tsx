
import React, { ReactNode, useState } from "react";

import { Outlet, NavLink } from "react-router";

import { useAuth } from "../context/AuthContext"; // Import the custom hook
import ProUI_SignInSide from "../pages/Auth/ProUI_SignInSide/ProUI_SignInSide";
import { useSettingsDrawer } from "../context/SettingsDrawerContext"; // Import the custom hook

import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";
import {
  Box, Toolbar, List, CssBaseline, Typography, Divider, Button, IconButton, ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Collapse
} from "@mui/material";


import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
// import BedtimeTwoToneIcon from '@mui/icons-material/BedtimeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';

import SettingsDrawer from "../components/ProUI_Elements/SettingsDrawer/SettingsDrawer";
import Footer_1 from "../components/ProUI_Elements/footer1/Footer_1";
// import ProUI_Typography from "../components/ProUI_Elements/Typography/ProUI_Typography";
import ProUI_UserAvatar from "../components/ProUI_Elements/ProUI_UserAvatar/ProUI_UserAvatar";
// import SetThemeColor from "../features/settings/themeColor/SetThemeColor";

import { blueGrey, grey } from "@mui/material/colors";
// import Dashboard_Home1 from "../features/dashboard/Dashboard_Home1";


import {
  ChevronLeft,
  ChevronRight,
  ExpandMore,
  ExpandLess,
  Home,
  Folder,
  Description
} from '@mui/icons-material';


// Define proper types for your menu items
type MenuItem = {
  title: string;
  icon?: ReactNode;
  level: number;
  path?: string;
  children?: MenuItem[];
};

// Fixed Drawer width
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function DashboardLayout() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Sample menu data structure
  const menuData: MenuItem[] = [
    {
      title: 'Dashboard',
      // icon: <Home />,
      icon: <DashboardTwoToneIcon />,
      level: 1,
      path: '/'
    },
    {
      title: 'Components',
      icon: <Folder />,
      level: 1,
      children: [
        {
          title: 'Electronics',
          level: 2,
          children: [
            { title: 'Smartphones', level: 3, path: '/products/electronics/smartphones' },
            { title: 'Laptops', level: 3, path: '/products/electronics/laptops' }
          ]
        },
        {
          title: 'Clothing',
          level: 2,
          children: [
            { title: 'Men', level: 3, path: '/products/clothing/men' },
            { title: 'Women', level: 3, path: '/products/clothing/women' }
          ]
        }
      ]
    },
    {
      title: 'Pages',
      icon: <Description />,
      level: 1,
      children: [
        { title: 'Templates', level: 2, path: '/documents/templates' },
        { title: 'Sitemap', level: 2, path: '/documents/reports' }
      ]
    }
  ];

  const handleToggle = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.title];
  
    return (
      <React.Fragment key={item.title}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <Tooltip
            title={!open ? item.title : ''}
            placement="right"
            disableHoverListener={open}
          >
            <ListItemButton
              component={!hasChildren && item.path ? NavLink : 'div'}
              to={!hasChildren && item.path ? item.path : undefined}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                pl: open ? theme.spacing(depth * 2 + 2) : theme.spacing(2),
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
                '&.active': {
                  backgroundColor: theme.palette.action.selected,
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.main,
                  },
                },
              }}
              onClick={() => hasChildren ? handleToggle(item.title) : undefined}
            >
              {item.icon && (
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              )}
              {open && (
                <>
                  <ListItemText 
                    primary={item.title} 
                    primaryTypographyProps={{
                      fontWeight: 'medium'
                    }}
                  />
                  {hasChildren && (isExpanded ? <ExpandLess /> : <ExpandMore />)}
                </>
              )}
            </ListItemButton>
          </Tooltip>
        </ListItem>
  
        {hasChildren && open && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map(child => renderMenuItem(child, depth + 1))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { authData, logout } = useAuth();
  const { handleToggleSettingsDrawer } = useSettingsDrawer(); // Access the drawer open state
  return (
    <>
      {authData.isAuthenticated ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <SettingsDrawer />
          {/* AppBar - Start */}
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="fixed"
              open={open}
              sx={{
                backdropFilter: "blur(8px)", // Apply blur effect
                backgroundColor: "rgba(255, 255, 255, 0.4)", // White with opacity for frosted look
                // boxShadow:"none",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 20px 20px -20px",
                // boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", // Custom shadow
                color: blueGrey[400],
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={[
                    {
                      marginRight: 5,
                    },
                    open && { display: "none" },
                  ]}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Codevik
                </Typography>
                <IconButton
                  aria-label="settings"
                  color="inherit"
                  onClick={handleToggleSettingsDrawer}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    animation: "spin 8s linear infinite",
                  }}
                >
                  <SettingsTwoToneIcon />
                  <style>
                    {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
                  </style>
                </IconButton>
                <ProUI_UserAvatar />
                <Button color="inherit" onClick={logout}>
                  Logout
                </Button>
                {/* <Button variant="outlined" color="inherit"><DarkModeTwoToneIcon/></Button> */}
                <IconButton color="inherit"><DarkModeTwoToneIcon /></IconButton>
              </Toolbar>
            </AppBar>
          </Box>
          {/* AppBar - End */}
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />

            <List>
              {menuData.map(item => renderMenuItem(item))}
            </List>
            {/* <List>
              <ListItem component={NavLink} to="/" disablePadding sx={{ display: "block" }}>

                <ListItemButton

                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                        justifyContent: "initial",
                      }
                      : {
                        justifyContent: "center",
                      },
                  ]}
                >
                  <ListItemIcon

                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                          mr: 3,
                        }
                        : {
                          mr: "auto",
                        },
                    ]}
                  >
                    <DashboardTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"
                    sx={[
                      open
                        ? {
                          opacity: 1,
                        }
                        : {
                          opacity: 0,
                        },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </List> */}
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>

                    <ListItemButton
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                        },
                        open
                          ? {
                            justifyContent: "initial",
                          }
                          : {
                            justifyContent: "center",
                          },
                      ]}
                    >
                      <ListItemIcon
                        sx={[
                          {
                            minWidth: 0,
                            justifyContent: "center",
                          },
                          open
                            ? {
                              mr: 3,
                            }
                            : {
                              mr: "auto",
                            },
                        ]}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={[
                          open
                            ? {
                              opacity: 1,
                            }
                            : {
                              opacity: 0,
                            },
                        ]}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                      },
                      open
                        ? {
                          justifyContent: "initial",
                        }
                        : {
                          justifyContent: "center",
                        },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",
                        },
                        open
                          ? {
                            mr: 3,
                          }
                          : {
                            mr: "auto",
                          },
                      ]}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={[
                        open
                          ? {
                            opacity: 1,
                          }
                          : {
                            opacity: 0,
                          },
                      ]}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>

          <Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3, background: grey[200] }}>
              <DrawerHeader />

              {/* <ProUI_Typography /> */}


              <Outlet />
              {/* <Dashboard_Home1 /> */}
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod
                quis viverra nibh cras. Metus vulputate eu scelerisque felis
                imperdiet proin fermentum leo. Mauris commodo quis imperdiet
                massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
                augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod
                quis viverra nibh cras. Metus vulputate eu scelerisque felis
                imperdiet proin fermentum leo. Mauris commodo quis imperdiet
                massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
                augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod
                quis viverra nibh cras. Metus vulputate eu scelerisque felis
                imperdiet proin fermentum leo. Mauris commodo quis imperdiet
                massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
                augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
            </Box>
            <Footer_1 />
          </Box>
        </Box>
      ) : (
        <ProUI_SignInSide />
      )}
    </>
  );
}
