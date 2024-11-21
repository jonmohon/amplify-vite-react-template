import React, { useEffect } from 'react';
import { useLeads } from '../hooks/useLeads';

const Leads: React.FC = () => {
  const { leads, fetchLeads, loading, error } = useLeads();

  useEffect(() => {
    const fetchData = async () => {
      await fetchLeads(); // Fetch the first page of leads
    };
    fetchData();
  }, [fetchLeads]);

  if (loading) {
    return <div>Loading leads...</div>;
  }

  if (error) {
    return <div>Error fetching leads: {error}</div>;
  }

  return (
    <div>
      <h1>Leads</h1>
      {leads.length === 0 ? (
        <p>No leads available.</p>
      ) : (
        <ul>
          {leads.map(lead => (
            <li key={lead.leadId}>
              {lead.firstName} {lead.lastName} - {lead.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Leads;
