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
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const { signOut } = useAuthenticator();
  const [open, setOpen] = useState(true);
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
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.primary.main,
        }}
      >
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
      </AppBar>
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
        <List sx={{ padding: 0 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.link}
              onClick={() => setPageTitle(item.text)}
              sx={{
                color: 'white',
                backgroundColor: theme.palette.primary.main,
                '&:hover': { backgroundColor: theme.palette.primary.dark },
                width: '100%',
                padding: '12px 16px',
                textDecoration: 'none',
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#ffffff' }}>
        <Toolbar />
        {/* Main content goes here */}
      </Box>
    </div>
  );
};

export default Sidebar;
