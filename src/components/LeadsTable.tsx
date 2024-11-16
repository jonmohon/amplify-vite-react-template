// LeadsTable.tsx - Updated to include renderActions prop

import React from 'react';
import { Table, Form } from 'react-bootstrap';
import LeadRow from './LeadRow';
import { LeadData } from '../types';
import styles from './LeadsTable.module.css';

interface LeadsTableProps {
  leads: LeadData[];
  selectedLeads: Set<string>;
  onSelectAll: (checked: boolean) => void;
  onSelectOne: (id: string) => void;
  renderActions?: (lead: LeadData) => JSX.Element;
}

const LeadsTable: React.FC<LeadsTableProps> = ({ leads, selectedLeads, onSelectAll, onSelectOne, renderActions }) => {
  return (
    <div className={styles['table-wrapper']}>
      <div className={styles['table-container']}>
        <Table 
          striped 
          bordered 
          hover 
          responsive 
          className={styles['leads-table']}
        >
          <thead>
            <tr>
              <th style={{ width: '50px', minWidth: '50px' }}>
                <Form.Check
                  type="checkbox"
                  onChange={(e) => onSelectAll(e.target.checked)}
                  checked={selectedLeads.size === leads.length && leads.length > 0}
                />
              </th>
              <th style={{ minWidth: '200px' }}>Email</th>
              <th style={{ minWidth: '150px' }}>First Name</th>
              <th style={{ minWidth: '150px' }}>Last Name</th>
              <th style={{ minWidth: '150px' }}>Phone Number</th>
              <th style={{ minWidth: '200px' }}>Company</th>
              <th style={{ minWidth: '150px' }}>Job Title</th>
              <th style={{ minWidth: '150px' }}>Industry</th>
              <th style={{ minWidth: '150px' }}>Lead Source</th>
              <th style={{ minWidth: '150px' }}>Campaign ID</th>
              <th style={{ minWidth: '150px' }}>Timezone</th>
              <th style={{ minWidth: '150px' }}>Status</th>
              <th style={{ minWidth: '150px' }}>Stage</th>
              <th style={{ minWidth: '150px' }}>Team</th>
              <th style={{ minWidth: '150px' }}>Priority</th>
              <th style={{ minWidth: '100px' }}>Score</th>
              <th style={{ minWidth: '150px' }}>Deal Value</th>
              <th style={{ minWidth: '200px' }}>Preferred Contact Method</th>
              <th style={{ minWidth: '200px' }}>Conversion Source</th>
              <th style={{ minWidth: '150px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <LeadRow 
                key={lead.id} 
                lead={lead} 
                isSelected={selectedLeads.has(lead.id!)} 
                onSelect={() => onSelectOne(lead.id!)}
              >
                {renderActions && (
                  <td>{renderActions(lead)}</td>
                )}
              </LeadRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default LeadsTable;
