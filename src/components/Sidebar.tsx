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
import {
  Dashboard,
  Campaign,
  Email as EmailIcon,
  Sms as SmsIcon,
  BarChart as AnalyticsIcon,
  Assessment as ReportIcon,
  Settings,
  People as LeadsIcon,
} from '@mui/icons-material';
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
    { text: 'Leads', icon: <LeadsIcon />, link: '/leads' },
    { text: 'Email', icon: <EmailIcon />, link: '/email' },
    { text: 'SMS', icon: <SmsIcon />, link: '/sms' },
    { text: 'Analytics', icon: <AnalyticsIcon />, link: '/analytics' },
    { text: 'Reporting', icon: <ReportIcon />, link: '/reporting' },
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
          marginBottom: '25px',
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            padding: '16px',
            marginTop: '50px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <img src="https://nexvato-images.s3.us-east-2.amazonaws.com/admin-images/logo.png" alt="Nexvato Logo" style={{ width: '70%', height: '40px' }} />
        </Box>

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
      </Box>
    </div>
  );
};

export default Sidebar;
