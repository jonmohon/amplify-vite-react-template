import React from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';
import { useLeads } from '../hooks/useLeads';
import { Lead } from '../types/lead';

const Leads: React.FC = () => {
  const { leads, loading, error, fetchLeads } = useLeads();

  React.useEffect(() => {
    console.log('Component mounted, fetching leads...');
    fetchLeads();
  }, [fetchLeads]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  console.log('Rendering leads:', leads);

  return (
    <Container fluid className="mt-5">
      <h2 className="mb-4">Leads ({leads.length})</h2>
      {leads.length === 0 ? (
        <Alert variant="info">No leads found</Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Industry</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead: Lead) => (
              <tr key={lead.id}>
                <td>{`${lead.firstName} ${lead.lastName}`}</td>
                <td>{lead.email}</td>
                <td>{lead.phoneNumber}</td>
                <td>{lead.company}</td>
                <td>{lead.jobTitle}</td>
                <td>{lead.industry}</td>
                <td>{lead.status}</td>
                <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Leads;