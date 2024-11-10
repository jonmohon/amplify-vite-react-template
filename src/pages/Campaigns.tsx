// src/pages/Campaigns.tsx
import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const campaignsData = [
  {
    id: 1,
    name: 'Summer Sale Email Blast',
    type: 'Email',
    status: 'Active',
    sent: 5000,
    opened: 3000,
    clicked: 1200,
    created: '2024-07-01',
    scheduled: '2024-07-05',
  },
  {
    id: 2,
    name: 'Back to School SMS Alert',
    type: 'SMS',
    status: 'Scheduled',
    sent: 2000,
    responses: 500,
    created: '2024-08-01',
    scheduled: '2024-08-10',
  },
  {
    id: 3,
    name: 'New Product Launch Email',
    type: 'Email',
    status: 'Draft',
    sent: 0,
    opened: 0,
    clicked: 0,
    created: '2024-09-01',
    scheduled: '2024-09-15',
  },
  {
    id: 4,
    name: 'Holiday Promo SMS',
    type: 'SMS',
    status: 'Active',
    sent: 3500,
    responses: 1000,
    created: '2024-11-20',
    scheduled: '2024-11-25',
  },
  {
    id: 5,
    name: 'Flash Sale Email Campaign',
    type: 'Email',
    status: 'Completed',
    sent: 4500,
    opened: 2500,
    clicked: 900,
    created: '2024-10-15',
    scheduled: '2024-10-20',
  },
];

const Campaigns: React.FC = () => {
  return (
    <Box sx={{ pt: 10, px: 3, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Campaigns
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: '0 auto', boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Campaign Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Sent</TableCell>
              <TableCell>Opened / Responses</TableCell>
              <TableCell>Clicked (Email Only)</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Scheduled</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaignsData.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell>{campaign.name}</TableCell>
                <TableCell>{campaign.type}</TableCell>
                <TableCell>{campaign.status}</TableCell>
                <TableCell>{campaign.sent}</TableCell>
                <TableCell>
                  {campaign.type === 'Email' ? campaign.opened : campaign.responses}
                </TableCell>
                <TableCell>{campaign.type === 'Email' ? campaign.clicked : '-'}</TableCell>
                <TableCell>{campaign.created}</TableCell>
                <TableCell>{campaign.scheduled}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" size="small">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Campaigns;
