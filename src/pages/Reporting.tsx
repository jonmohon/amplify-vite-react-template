import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from '@mui/material';
import { CSVLink } from 'react-csv';
import { SelectChangeEvent } from '@mui/material';

const dummyData = [
  { id: 1, name: "Email Campaign 1", leads: 120, clicks: 300, openRate: "60%", conversionRate: "20%", status: "Completed" },
  { id: 2, name: "SMS Campaign 2", leads: 80, clicks: 200, openRate: "50%", conversionRate: "10%", status: "Ongoing" },
  { id: 3, name: "Email Campaign 3", leads: 200, clicks: 400, openRate: "70%", conversionRate: "25%", status: "Completed" },
  { id: 4, name: "SMS Campaign 4", leads: 150, clicks: 250, openRate: "65%", conversionRate: "15%", status: "Ongoing" },
  { id: 5, name: "Email Campaign 5", leads: 180, clicks: 350, openRate: "68%", conversionRate: "18%", status: "Completed" },
];

const Reports: React.FC = () => {
  const [campaignType, setCampaignType] = useState<string>("All");
  const [dateRange, setDateRange] = useState<string>("All");

  const handleCampaignTypeChange = (event: SelectChangeEvent<string>) => {
    setCampaignType(event.target.value as string);
  };

  const handleDateRangeChange = (event: SelectChangeEvent<string>) => {
    setDateRange(event.target.value as string);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', padding: '20px', marginTop: 8 }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h4" gutterBottom>
          Reports
        </Typography>

        {/* Filters */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h6" gutterBottom>
            Filter Reports
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Campaign Type</InputLabel>
                <Select
                  value={campaignType}
                  onChange={handleCampaignTypeChange}
                  label="Campaign Type"
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Email">Email</MenuItem>
                  <MenuItem value="SMS">SMS</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Date Range</InputLabel>
                <Select
                  value={dateRange}
                  onChange={handleDateRangeChange}
                  label="Date Range"
                >
                  <MenuItem value="All">All Time</MenuItem>
                  <MenuItem value="Last 7 Days">Last 7 Days</MenuItem>
                  <MenuItem value="Last 30 Days">Last 30 Days</MenuItem>
                  <MenuItem value="This Year">This Year</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" alignItems="center">
              <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
                Apply Filters
              </Button>
              <CSVLink data={dummyData} filename={"campaign_report.csv"} style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="secondary">
                  Export CSV
                </Button>
              </CSVLink>
            </Grid>
          </Grid>
        </Paper>

        {/* Summary */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h6" gutterBottom>
            Campaign Summary
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant="body1">Total Leads: 730</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body1">Total Clicks: 1500</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body1">Average Open Rate: 63%</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body1">Average Conversion Rate: 18%</Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Reports Table */}
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Detailed Reports
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Campaign Name</TableCell>
                  <TableCell>Leads</TableCell>
                  <TableCell>Clicks</TableCell>
                  <TableCell>Open Rate</TableCell>
                  <TableCell>Conversion Rate</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyData.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell>{campaign.name}</TableCell>
                    <TableCell>{campaign.leads}</TableCell>
                    <TableCell>{campaign.clicks}</TableCell>
                    <TableCell>{campaign.openRate}</TableCell>
                    <TableCell>{campaign.conversionRate}</TableCell>
                    <TableCell>{campaign.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default Reports;
