// src/components/LeadRow.tsx
import React from 'react';
import { Form } from 'react-bootstrap';
import { LeadData } from '../types';
import './LeadRow.css'; // Import CSS for text overflow handling

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
      <td className="lead-cell">{lead.email || '-'}</td>
      <td className="lead-cell">{lead.first_name || '-'}</td>
      <td className="lead-cell">{lead.last_name || '-'}</td>
      <td className="lead-cell">{lead.phone_number || '-'}</td>
      <td className="lead-cell">{lead.company || '-'}</td>
      <td className="lead-cell">{lead.job_title || '-'}</td>
      <td className="lead-cell">{lead.industry || '-'}</td>
      <td className="lead-cell">{lead.lead_source || '-'}</td>
      <td className="lead-cell">{lead.campaign_id || '-'}</td>
      <td className="lead-cell">{lead.timezone || '-'}</td>
      <td className="lead-cell">{lead.status || '-'}</td>
      <td className="lead-cell">{lead.stage || '-'}</td>
      <td className="lead-cell">{lead.team || '-'}</td>
      <td className="lead-cell">{lead.priority || '-'}</td>
      <td className="lead-cell">{lead.score !== null && lead.score !== undefined ? lead.score : '-'}</td>
      <td className="lead-cell">{lead.deal_value !== null && lead.deal_value !== undefined ? lead.deal_value : '-'}</td>
      <td className="lead-cell">{lead.preferred_contact_method || '-'}</td>
      <td className="lead-cell">{lead.conversion_source || '-'}</td>
    </tr>
  );
};

export default LeadRow;
