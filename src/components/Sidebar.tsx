import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Typography } from '@mui/material';
import { Dashboard, ShoppingCart, Inventory, Settings, Analytics, Sms, Build } from '@mui/icons-material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  const [openInventory, setOpenInventory] = useState(false);

  const toggleInventory = () => setOpenInventory(!openInventory);

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard /> },
    { text: 'Orders', icon: <ShoppingCart /> },
    {
      text: 'Inventory',
      icon: <Inventory />,
      expandable: true,
      open: openInventory,
      onClick: toggleInventory,
      subItems: [
        { text: 'Products' },
        { text: 'Packages' },
        { text: 'Locations' },
      ],
    },
    { text: 'Analytics', icon: <Analytics /> },
    { text: 'Email & SMS', icon: <Sms /> },
    { text: 'Settings', icon: <Settings /> },
    { text: 'AI Tool', icon: <Build /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#0A89FF', // Set primary blue background color
          color: 'white', // Set text color to white for contrast
        },
      }}
    >
      <Typography variant="h6" sx={{ padding: 2, color: 'white' }}>
        MyApp
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <>
            <ListItem
              component="button"
              key={index}
              onClick={item.onClick}
              sx={{
                color: 'white',
                padding: '10px 20px',
                '&:hover': { backgroundColor: '#005f99' }, // Darker blue on hover
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {item.expandable && (item.open ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.expandable && (
              <Collapse in={item.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem
                      key={`${index}-${subIndex}`}
                      sx={{
                        paddingLeft: 4,
                        color: 'white',
                        '&:hover': { backgroundColor: '#005f99' }, // Darker blue on hover
                      }}
                    >
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
