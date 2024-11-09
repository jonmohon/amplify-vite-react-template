// src/components/Sidebar.tsx
import React, { useState } from 'react';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  Button,
  Box,
} from '@mui/material';
import { Dashboard, Campaign, Email, Sms, Analytics, Report, Settings } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const drawerWidth = 240;

const MainContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginTop: theme.spacing(8), // adjust for the header height
  backgroundColor: '#fff',
  minHeight: 'calc(100vh - 64px)', // adjust for header height
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const { signOut } = useAuthenticator();
  const [open, setOpen] = useState(true); // Set to true for the drawer to be open initially
  const [pageTitle, setPageTitle] = useState("Dashboard");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, link: '/dashboard' },
    { text: 'Campaigns', icon: <Campaign />, link: '/campaigns' },
    { text: 'Email', icon: <Email />, link: '/email' },
    { text: 'SMS', icon: <Sms />, link: '/sms' },
    { text: 'Analytics', icon: <Analytics />, link: '/analytics' },
    { text: 'Reporting', icon: <Report />, link: '/reporting' },
    { text: 'Settings', icon: <Settings />, link: '/settings' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarStyled position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {pageTitle}
          </Typography>
          <Button color="inherit" onClick={signOut}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBarStyled>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.link}
              onClick={() => setPageTitle(item.text)}
              sx={{
                color: 'white',
                '&:hover': { backgroundColor: theme.palette.primary.dark },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <MainContent>
        <Box sx={{ padding: 3, bgcolor: '#fff', boxShadow: 3, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            {pageTitle}
          </Typography>
          {/* Main content goes here */}
        </Box>
      </MainContent>
    </div>
  );
};

export default Sidebar;
