// src/pages/Dashboard.tsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

// Sample data for charts with lower values
const emailBarData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Email Opens',
      data: [20, 15, 25, 30, 10, 5],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
    {
      label: 'Email Clicks',
      data: [10, 5, 10, 15, 8, 3],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    },
  ],
};

const smsBarData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'SMS Sent',
      data: [15, 10, 18, 20, 10, 12],
      backgroundColor: 'rgba(255, 159, 64, 0.6)',
    },
    {
      label: 'SMS Responses',
      data: [5, 3, 8, 10, 4, 2],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

const emailPieData = {
  labels: ['Opened', 'Clicked', 'Bounced', 'Unsubscribed'],
  datasets: [
    {
      label: 'Email Campaign Stats',
      data: [15, 5, 2, 1],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 206, 86, 0.6)',
      ],
    },
  ],
};

const smsPieData = {
  labels: ['Sent', 'Responses', 'Failed'],
  datasets: [
    {
      label: 'SMS Campaign Stats',
      data: [20, 8, 1],
      backgroundColor: [
        'rgba(255, 159, 64, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
    },
  ],
};

const Dashboard: React.FC = () => {
  return (
    <Box
      sx={{
        pt: 12, // Padding to prevent overlap with the header
        px: 3,
        backgroundColor: '#f4f6f8',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px', // Limits the max width of the container
          width: '100%',
          marginTop: 3, // Margin between header and chart container
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Dashboard
        </Typography>
        <Grid container spacing={4}>
          {/* Email Opens and Clicks Bar Chart */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'white',
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                height: '400px', // Fixed height for uniformity
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ width: '90%', height: '90%' }}>
                <Typography variant="h6" align="center" gutterBottom>
                  Monthly Email Performance
                </Typography>
                <Bar data={emailBarData} options={{ responsive: true, maintainAspectRatio: false }} />
              </Box>
            </Box>
          </Grid>

          {/* SMS Sent and Responses Bar Chart */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'white',
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                height: '400px', // Fixed height for uniformity
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ width: '90%', height: '90%' }}>
                <Typography variant="h6" align="center" gutterBottom>
                  Monthly SMS Performance
                </Typography>
                <Bar data={smsBarData} options={{ responsive: true, maintainAspectRatio: false }} />
              </Box>
            </Box>
          </Grid>

          {/* Email Campaign Pie Chart */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'white',
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                height: '400px', // Fixed height for uniformity
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ width: '90%', height: '90%' }}>
                <Typography variant="h6" align="center" gutterBottom>
                  Email Campaign Stats
                </Typography>
                <Pie data={emailPieData} options={{ responsive: true, maintainAspectRatio: false }} />
              </Box>
            </Box>
          </Grid>

          {/* SMS Campaign Pie Chart */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'white',
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                height: '400px', // Fixed height for uniformity
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ width: '90%', height: '90%' }}>
                <Typography variant="h6" align="center" gutterBottom>
                  SMS Campaign Stats
                </Typography>
                <Pie data={smsPieData} options={{ responsive: true, maintainAspectRatio: false }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
