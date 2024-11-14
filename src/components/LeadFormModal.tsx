import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { LeadData } from '../types';

interface LeadFormModalProps {
  show: boolean;
  onHide: () => void;
  formData: LeadData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ show, onHide, formData, onChange, onSubmit }) => {
  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      dialogClassName="modal-90w" 
      size="xl" 
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Enter Lead Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Row>
            {/* First Column */}
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Email <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email || ''}
                  onChange={onChange}
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
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  placeholder="Enter last name"
                  value={formData.last_name ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone_number"
                  placeholder="Enter phone number"
                  value={formData.phone_number ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  placeholder="Enter company name"
                  value={formData.company ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  name="job_title"
                  placeholder="Enter job title"
                  value={formData.job_title ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>

            {/* Second Column */}
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Industry</Form.Label>
                <Form.Control
                  type="text"
                  name="industry"
                  placeholder="Enter industry"
                  value={formData.industry ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Lead Source</Form.Label>
                <Form.Control
                  type="text"
                  name="lead_source"
                  placeholder="Enter lead source"
                  value={formData.lead_source ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Campaign ID</Form.Label>
                <Form.Control
                  type="text"
                  name="campaign_id"
                  placeholder="Enter campaign ID"
                  value={formData.campaign_id ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Timezone</Form.Label>
                <Form.Control
                  type="text"
                  name="timezone"
                  placeholder="Enter timezone"
                  value={formData.timezone ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  name="status"
                  placeholder="Enter status"
                  value={formData.status ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Stage</Form.Label>
                <Form.Control
                  type="text"
                  name="stage"
                  placeholder="Enter stage"
                  value={formData.stage ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>

            {/* Third Column */}
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Team</Form.Label>
                <Form.Control
                  type="text"
                  name="team"
                  placeholder="Enter team"
                  value={formData.team ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Priority</Form.Label>
                <Form.Control
                  type="text"
                  name="priority"
                  placeholder="Enter priority"
                  value={formData.priority ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Score</Form.Label>
                <Form.Control
                  type="number"
                  name="score"
                  placeholder="Enter score"
                  value={formData.score ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Deal Value</Form.Label>
                <Form.Control
                  type="number"
                  name="deal_value"
                  placeholder="Enter deal value"
                  value={formData.deal_value ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Preferred Contact Method</Form.Label>
                <Form.Control
                  type="text"
                  name="preferred_contact_method"
                  placeholder="Enter preferred contact method"
                  value={formData.preferred_contact_method ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Conversion Source</Form.Label>
                <Form.Control
                  type="text"
                  name="conversion_source"
                  placeholder="Enter conversion source"
                  value={formData.conversion_source ?? ''}
                  onChange={onChange}
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
  );
};
export default LeadFormModal;
