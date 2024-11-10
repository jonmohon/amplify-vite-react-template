import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Divider,
  Paper,
} from '@mui/material';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', padding: '20px', marginTop: 8 }}>
      <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>

        {/* Account Settings */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h6" gutterBottom>
            Account Settings
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Full Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Password" fullWidth variant="outlined" type="password" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Confirm Password" fullWidth variant="outlined" type="password" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Update Account
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Preferences */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h6" gutterBottom>
            Preferences
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={handleDarkModeToggle}
                color="primary"
              />
            }
            label="Dark Mode"
          />
        </Paper>

        {/* Notification Settings */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h6" gutterBottom>
            Notification Settings
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Email Notifications"
          />
          <FormControlLabel
            control={<Switch color="primary" />}
            label="SMS Notifications"
          />
        </Paper>

        {/* Security Settings */}
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Security Settings
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Button variant="contained" color="secondary" sx={{ marginBottom: 2 }}>
            Enable Two-Factor Authentication
          </Button>
          <Typography variant="body2">
            Review recent login activity and manage connected devices.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Settings;
