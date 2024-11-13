import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Table, Container, Row, Col } from 'react-bootstrap';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import outputs from '../../amplify_outputs.json';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure this is imported to enable Bootstrap styling

Amplify.configure(outputs);

const client = generateClient<Schema>({
  authMode: 'userPool',
});

interface LeadData {
  lead_id?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone_number?: string;
  company?: string;
  job_title?: string;
  industry?: string;
  lead_source?: string;
  campaign_id?: string;
  timezone?: string;
  preferred_contact_method?: string;
  status?: string;
  stage?: string;
  team?: string;
  conversion_source?: string;
  priority?: string;
  score?: number;
  deal_value?: number;
  tags?: string[];
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
}

const Leads = () => {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [formData, setFormData] = useState<LeadData>({ email: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await client.models.Lead.list();
        const leadsData = response.data;
        setLeads(leadsData as LeadData[]);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };
    fetchLeads();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await client.models.Lead.create(formData);
      const response = await client.models.Lead.list();
      setLeads(response.data as LeadData[]);
      setIsModalOpen(false);
      setFormData({ email: '' });
    } catch (error) {
      console.error('Error creating lead:', error);
    }
  };

  return (
    <Container className="mt-5">
      {/* Add Lead Button */}
      <Button
        variant="primary"
        onClick={() => setIsModalOpen(true)}
        className="mb-4"
      >
        Add New Lead
      </Button>

      {/* Modal for Adding Lead */}
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Lead Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email (required)</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    placeholder="Enter first name"
                    value={formData.first_name || ''}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Enter last name"
                    value={formData.last_name || ''}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone_number"
                    placeholder="Enter phone number"
                    value={formData.phone_number || ''}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    placeholder="Enter company"
                    value={formData.company || ''}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="job_title"
                    placeholder="Enter job title"
                    value={formData.job_title || ''}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Save Lead
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Leads List Table */}
      <h2 className="my-4">Leads List</h2>
      <Table striped bordered hover responsive="md">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.email}</td>
              <td>{lead.first_name || '-'}</td>
              <td>{lead.last_name || '-'}</td>
              <td>{lead.phone_number || '-'}</td>
              <td>{lead.company || '-'}</td>
              <td>{lead.job_title || '-'}</td>
              <td>{lead.industry || '-'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Leads;
