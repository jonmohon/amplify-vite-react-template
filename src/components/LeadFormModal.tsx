// LeadFormModal.tsx - Updated to handle both new lead creation and editing

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
        <Modal.Title>{formData.id ? 'Edit Lead' : 'Enter Lead Information'}</Modal.Title>
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
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName || ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber ?? ''}
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
                  name="jobTitle"
                  placeholder="Enter job title"
                  value={formData.jobTitle ?? ''}
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
                  name="leadSource"
                  placeholder="Enter lead source"
                  value={formData.leadSource ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Campaign ID</Form.Label>
                <Form.Control
                  type="text"
                  name="campaignId"
                  placeholder="Enter campaign ID"
                  value={formData.campaignId ?? ''}
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
                  name="dealValue"
                  placeholder="Enter deal value"
                  value={formData.dealValue ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Preferred Contact Method</Form.Label>
                <Form.Control
                  type="text"
                  name="preferredContactMethod"
                  placeholder="Enter preferred contact method"
                  value={formData.preferredContactMethod ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Conversion Source</Form.Label>
                <Form.Control
                  type="text"
                  name="conversionSource"
                  placeholder="Enter conversion source"
                  value={formData.conversionSource ?? ''}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            {formData.id ? 'Update Lead' : 'Save Lead'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default LeadFormModal;