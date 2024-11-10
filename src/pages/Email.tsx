// src/pages/Email.tsx
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

type EmailCampaign = {
  id: number;
  name: string;
  subject: string;
  status: boolean;
  sent: number;
  opened: number;
  clicked: number;
  created: string;
};

const initialEmailCampaigns: EmailCampaign[] = [
  {
    id: 1,
    name: 'Welcome Series',
    subject: 'Welcome to our service!',
    status: true,
    sent: 1500,
    opened: 800,
    clicked: 250,
    created: '2024-06-01',
  },
  {
    id: 2,
    name: 'Monthly Newsletter',
    subject: 'August News and Updates',
    status: false,
    sent: 1200,
    opened: 700,
    clicked: 180,
    created: '2024-07-15',
  },
  {
    id: 3,
    name: 'Exclusive Offers',
    subject: 'Special Discount Inside',
    status: true,
    sent: 1800,
    opened: 900,
    clicked: 450,
    created: '2024-08-20',
  },
  {
    id: 4,
    name: 'Holiday Greetings',
    subject: 'Happy Holidays from Us!',
    status: false,
    sent: 1000,
    opened: 600,
    clicked: 200,
    created: '2024-12-01',
  },
  {
    id: 5,
    name: 'Re-engagement Campaign',
    subject: 'We Miss You! Here’s a Special Offer',
    status: true,
    sent: 1300,
    opened: 500,
    clicked: 120,
    created: '2024-10-05',
  },
];

const Email: React.FC = () => {
  const [emailCampaigns, setEmailCampaigns] = useState(initialEmailCampaigns);

  const handleStatusToggle = (id: number) => {
    setEmailCampaigns((prevCampaigns) =>
      prevCampaigns.map((campaign) =>
        campaign.id === id ? { ...campaign, status: !campaign.status } : campaign
      )
    );
  };

  const handleEdit = (id: number) => {
    console.log(`Editing campaign with ID: ${id}`);
  };

  const handleCreateNew = () => {
    console.log('Creating new email campaign');
  };

  return (
    <Box sx={{ pt: 10, px: 3, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Email Campaigns
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
              <TableCell>Subject</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Sent</TableCell>
              <TableCell>Opened</TableCell>
              <TableCell>Clicked</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emailCampaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell>{campaign.name}</TableCell>
                <TableCell>{campaign.subject}</TableCell>
                <TableCell>
                  <Switch
                    checked={campaign.status}
                    onChange={() => handleStatusToggle(campaign.id)}
                    color="primary"
                  />
                </TableCell>
                <TableCell>{campaign.sent}</TableCell>
                <TableCell>{campaign.opened}</TableCell>
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

export default Email;
