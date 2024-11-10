// src/pages/Sms.tsx
import React, { useState } from 'react';
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
  Switch,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

type SMSCampaign = {
  id: number;
  name: string;
  message: string;
  status: boolean;
  sent: number;
  delivered: number;
  clicked: number;
  created: string;
};

const initialSMSCampaigns: SMSCampaign[] = [
  {
    id: 1,
    name: 'Promo Alert',
    message: 'Get 20% off on your next purchase!',
    status: true,
    sent: 2000,
    delivered: 1800,
    clicked: 400,
    created: '2024-06-10',
  },
  {
    id: 2,
    name: 'Re-engagement SMS',
    message: 'We miss you! Here’s a 10% discount just for you.',
    status: false,
    sent: 1500,
    delivered: 1200,
    clicked: 300,
    created: '2024-07-01',
  },
  {
    id: 3,
    name: 'Event Reminder',
    message: 'Don’t forget our exclusive sale event tomorrow!',
    status: true,
    sent: 1800,
    delivered: 1600,
    clicked: 500,
    created: '2024-08-15',
  },
  {
    id: 4,
    name: 'Product Launch',
    message: 'New arrivals are here! Check them out.',
    status: true,
    sent: 2200,
    delivered: 2100,
    clicked: 700,
    created: '2024-09-10',
  },
  {
    id: 5,
    name: 'Survey SMS',
    message: 'How did we do? Share your feedback and get a gift!',
    status: false,
    sent: 1200,
    delivered: 1000,
    clicked: 200,
    created: '2024-10-05',
  },
];

const SMS: React.FC = () => {
  const [smsCampaigns, setSMSCampaigns] = useState(initialSMSCampaigns);

  const handleStatusToggle = (id: number) => {
    setSMSCampaigns((prevCampaigns) =>
      prevCampaigns.map((campaign) =>
        campaign.id === id ? { ...campaign, status: !campaign.status } : campaign
      )
    );
  };

  const handleEdit = (id: number) => {
    console.log(`Editing SMS campaign with ID: ${id}`);
  };

  const handleCreateNew = () => {
    console.log('Creating new SMS campaign');
  };

  return (
    <Box sx={{ pt: 10, px: 3, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        SMS Campaigns
      </Typography>
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleCreateNew}
        >
          Create New Campaign
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: '0 auto', boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Campaign Name</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Sent</TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell>Clicked</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {smsCampaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell>{campaign.name}</TableCell>
                <TableCell>{campaign.message}</TableCell>
                <TableCell>
                  <Switch
                    checked={campaign.status}
                    onChange={() => handleStatusToggle(campaign.id)}
                    color="primary"
                  />
                </TableCell>
                <TableCell>{campaign.sent}</TableCell>
                <TableCell>{campaign.delivered}</TableCell>
                <TableCell>{campaign.clicked}</TableCell>
                <TableCell>{campaign.created}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(campaign.id)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SMS;
