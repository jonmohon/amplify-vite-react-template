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
      <td className="lead-cell">{lead.firstName || '-'}</td>
      <td className="lead-cell">{lead.lastName || '-'}</td>
      <td className="lead-cell">{lead.phoneNumber || '-'}</td>
      <td className="lead-cell">{lead.company || '-'}</td>
      <td className="lead-cell">{lead.jobTitle || '-'}</td>
      <td className="lead-cell">{lead.industry || '-'}</td>
      <td className="lead-cell">{lead.leadSource || '-'}</td>
      <td className="lead-cell">{lead.campaignId || '-'}</td>
      <td className="lead-cell">{lead.timezone || '-'}</td>
      <td className="lead-cell">{lead.status || '-'}</td>
      <td className="lead-cell">{lead.stage || '-'}</td>
      <td className="lead-cell">{lead.team || '-'}</td>
      <td className="lead-cell">{lead.priority || '-'}</td>
      <td className="lead-cell">{lead.score !== null && lead.score !== undefined ? lead.score : '-'}</td>
      <td className="lead-cell">{lead.dealValue !== null && lead.dealValue !== undefined ? lead.dealValue : '-'}</td>
      <td className="lead-cell">{lead.preferredContactMethod || '-'}</td>
      <td className="lead-cell">{lead.conversionSource || '-'}</td>
    </tr>
  );
};

export default LeadRow;
