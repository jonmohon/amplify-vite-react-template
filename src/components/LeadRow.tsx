import React from 'react';
import { Form } from 'react-bootstrap';
import { LeadData } from '../types';

interface LeadRowProps {
  lead: LeadData;
  isSelected: boolean;
  onSelect: () => void;
}

const LeadRow: React.FC<LeadRowProps> = ({ lead, isSelected, onSelect }) => {
  return (
    <tr>
      <td>
        <Form.Check
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
        />
      </td>
      <td>{lead.email}</td>
      <td>{lead.first_name || '-'}</td>
      <td>{lead.last_name || '-'}</td>
      <td>{lead.phone_number || '-'}</td>
      <td>{lead.company || '-'}</td>
      <td>{lead.job_title || '-'}</td>
      <td>{lead.industry || '-'}</td>
      <td>{lead.lead_source || '-'}</td>
      <td>{lead.campaign_id || '-'}</td>
      <td>{lead.timezone || '-'}</td>
      <td>{lead.status || '-'}</td>
      <td>{lead.stage || '-'}</td>
      <td>{lead.team || '-'}</td>
      <td>{lead.priority || '-'}</td>
      <td>{lead.score !== undefined ? lead.score : '-'}</td>
      <td>{lead.deal_value !== undefined ? lead.deal_value : '-'}</td>
      <td>{lead.preferred_contact_method || '-'}</td>
      <td>{lead.conversion_source || '-'}</td>
    </tr>
  );
};

export default LeadRow;
