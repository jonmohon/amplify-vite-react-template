import React from 'react';
import { Table } from 'react-bootstrap';

interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  leads_count: number;
  conversion_rate: number;
  created_at: string;
}

interface CampaignsTableProps {
  campaigns: Campaign[];
  selectedCampaigns: Set<string>;
  onSelectAll: (checked: boolean) => void;
  onSelectOne: (campaignId: string) => void;
}

const CampaignsTable: React.FC<CampaignsTableProps> = ({
  campaigns,
  selectedCampaigns,
  onSelectAll,
  onSelectOne,
}) => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={campaigns.length > 0 && selectedCampaigns.size === campaigns.length}
              onChange={(e) => onSelectAll(e.target.checked)}
            />
          </th>
          <th>Campaign Name</th>
          <th>Status</th>
          <th>Leads Count</th>
          <th>Conversion Rate</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign) => (
          <tr key={campaign.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedCampaigns.has(campaign.id)}
                onChange={() => onSelectOne(campaign.id)}
              />
            </td>
            <td>{campaign.name}</td>
            <td>
              <span className={`badge bg-${getStatusColor(campaign.status)}`}>
                {campaign.status}
              </span>
            </td>
            <td>{campaign.leads_count}</td>
            <td>{campaign.conversion_rate}%</td>
            <td>{new Date(campaign.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'active':
      return 'success';
    case 'paused':
      return 'warning';
    case 'completed':
      return 'info';
    default:
      return 'secondary';
  }
};

export default CampaignsTable;
