import React from 'react';
import { Table, Form } from 'react-bootstrap';
import LeadRow from './LeadRow';
import { LeadData } from '../types';

interface LeadsTableProps {
  leads: LeadData[];
  selectedLeads: Set<string>;
  onSelectAll: (checked: boolean) => void;
  onSelectOne: (id: string) => void;
}

const LeadsTable: React.FC<LeadsTableProps> = ({ leads, selectedLeads, onSelectAll, onSelectOne }) => {
  return (
    <Table striped bordered hover style={{ margin: 0 }}>
      <thead style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
        <tr>
          <th style={{ width: '50px', background: 'white' }}>
            <Form.Check
              type="checkbox"
              onChange={(e) => onSelectAll(e.target.checked)}
              checked={selectedLeads.size === leads.length && leads.length > 0}
            />
          </th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Company</th>
          <th>Job Title</th>
          <th>Industry</th>
          <th>Lead Source</th>
          <th>Campaign ID</th>
          <th>Timezone</th>
          <th>Status</th>
          <th>Stage</th>
          <th>Team</th>
          <th>Priority</th>
          <th>Score</th>
          <th>Deal Value</th>
          <th>Preferred Contact Method</th>
          <th>Conversion Source</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <LeadRow 
            key={lead.id} 
            lead={lead} 
            isSelected={selectedLeads.has(lead.id!)} 
            onSelect={() => onSelectOne(lead.id!)} 
          />
        ))}
      </tbody>
    </Table>
  );
};

export default LeadsTable;
