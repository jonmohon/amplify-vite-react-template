import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Pie } from 'react-chartjs-2';

// Dummy data for campaigns
const campaignData = [
  { id: 1, name: 'Campaign 1', responseTime: '3.5', leadsGenerated: 50, dealsClosed: 20, recipients: 200 },
  { id: 2, name: 'Campaign 2', responseTime: '4.0', leadsGenerated: 30, dealsClosed: 15, recipients: 150 },
  { id: 3, name: 'Campaign 3', responseTime: '2.8', leadsGenerated: 60, dealsClosed: 30, recipients: 250 },
  { id: 4, name: 'Campaign 4', responseTime: '3.2', leadsGenerated: 40, dealsClosed: 18, recipients: 180 },
  { id: 5, name: 'Campaign 5', responseTime: '5.0', leadsGenerated: 20, dealsClosed: 10, recipients: 100 },
];

const Analytics: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string>('');

  const handleCampaignChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCampaign(event.target.value as string);
  };

  const selectedCampaignData = campaignData.find((c) => c.name === selectedCampaign);

  const responseTimeData = {
    labels: ['Average Response Time'],
    datasets: [
      {
        data: [selectedCampaignData ? parseFloat(selectedCampaignData.responseTime) : 0],
        backgroundColor: ['#ff8c00'],
      },
    ],
  };

  const leadsGeneratedData = {
    labels: ['Leads Generated'],
    datasets: [
      {
        data: [selectedCampaignData ? selectedCampaignData.leadsGenerated : 0],
        backgroundColor: ['#4caf50'],
      },
    ],
  };

  const dealsClosedData = {
    labels: ['Deals Closed'],
    datasets: [
      {
        data: [selectedCampaignData ? selectedCampaignData.dealsClosed : 0],
        backgroundColor: ['#2196f3'],
      },
    ],
  };

  const recipientsData = {
    labels: ['Recipients'],
    datasets: [
      {
        data: [selectedCampaignData ? selectedCampaignData.recipients : 0],
        backgroundColor: ['#9c27b0'],
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', padding: '20px', marginTop: 8 }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h4" gutterBottom>
          Analytics Overview
        </Typography>

        <Grid container spacing={2} marginBottom={4}>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel>Select Campaign</InputLabel>
              <Select
                value={selectedCampaign}
                onChange={(event) => handleCampaignChange(event as React.ChangeEvent<{ value: unknown }>)}
                label="Select Campaign"
              >
                {campaignData.map((campaign) => (
                  <MenuItem key={campaign.id} value={campaign.name}>
                    {campaign.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, backgroundColor: '#f9f9f9', borderRadius: 2, height: 400 }}>
              <Typography variant="h6" gutterBottom marginTop={4}>
                Response Time Analysis
              </Typography>
              <Pie data={responseTimeData} options={{ responsive: true }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, backgroundColor: '#f9f9f9', borderRadius: 2, height: 400 }}>
              <Typography variant="h6" gutterBottom marginTop={4}>
                Leads Generated
              </Typography>
              <Pie data={leadsGeneratedData} options={{ responsive: true }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, backgroundColor: '#f9f9f9', borderRadius: 2, height: 400 }}>
              <Typography variant="h6" gutterBottom marginTop={4}>
                Deals Closed
              </Typography>
              <Pie data={dealsClosedData} options={{ responsive: true }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, backgroundColor: '#f9f9f9', borderRadius: 2, height: 400 }}>
              <Typography variant="h6" gutterBottom marginTop={4}>
                Recipients
              </Typography>
              <Pie data={recipientsData} options={{ responsive: true }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Analytics;
