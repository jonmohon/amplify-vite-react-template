import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface CampaignFormModalProps {
  show: boolean;
  onHide: () => void;
  formData: {
    name: string;
    subject: string;
    textContent: string;
    htmlContent: string;
  };
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onEditorChange: (content: string) => void;
}

const CampaignFormModal: React.FC<CampaignFormModalProps> = ({
  show,
  onHide,
  formData,
  onSubmit,
  onChange,
  onEditorChange,
}) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Campaign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subject Line</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Plain Text Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="textContent"
              value={formData.textContent}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>HTML Content</Form.Label>
            <ReactQuill
              theme="snow"
              value={formData.htmlContent}
              onChange={onEditorChange}
              style={{ height: '200px', marginBottom: '50px' }}
              modules={{
                toolbar: [
                  [{ 'header': [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  [{ 'color': [] }, { 'background': [] }],
                  ['link', 'image'],
                  ['clean']
                ]
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Create Campaign
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CampaignFormModal;
