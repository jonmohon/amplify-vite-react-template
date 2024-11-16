/**
 * Imports the necessary React hooks for managing state and side effects.
 */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeaderToolbar from '../components/HeaderToolbar';
import LeadFormModal from '../components/LeadFormModal';
import LeadsTable from '../components/LeadsTable';
import PaginationComponent from '../components/PaginationComponent';
import { useLeads } from '../hooks/useLeads';
import { LeadData, LeadCreate, LeadUpdate } from '../types';
import { FaEdit } from 'react-icons/fa';

const Leads: React.FC = () => {
  const { 
    leads, 
    loading, 
    error, 
    fetchLeads, 
    createLead, 
    updateLead, 
    deleteLead 
  } = useLeads();

  const [formData, setFormData] = useState<LeadData>({ email: null });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;

  // Fetch leads on component mount
  useEffect(() => {
    fetchLeads({ page: currentPage, pageSize: leadsPerPage });
  }, [currentPage, fetchLeads]);

  // Error handling
  useEffect(() => {
    if (error) {
      // TODO: Implement error toast or notification
      console.error('Leads Error:', error);
    }
  }, [error]);

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let finalValue: string | number | null = value;

    if (name === 'score' || name === 'dealValue') {
      finalValue = value === '' ? null : Number(value);
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: finalValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditMode && formData.id) {
        // Type-safe update
        await updateLead(formData.id, formData as LeadUpdate);
      } else {
        // Type-safe create
        await createLead(formData as LeadCreate);
      }
      setIsModalOpen(false);
      setFormData({ email: null });
      setIsEditMode(false);
    } catch (error) {
      console.error(isEditMode ? 'Error updating lead:' : 'Error creating lead:', error);
    }
  };

  const handleEditClick = (lead: LeadData) => {
    setFormData(lead);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleCheckboxChange = (leadId: string) => {
    const newSelected = new Set(selectedLeads);
    if (newSelected.has(leadId)) {
      newSelected.delete(leadId);
    } else {
      newSelected.add(leadId);
    }
    setSelectedLeads(newSelected);
  };

  const handleDeleteSelected = async () => {
    try {
      // Delete leads one by one
      const deletePromises = Array.from(selectedLeads).map(leadId => 
        deleteLead(leadId)
      );
      await Promise.all(deletePromises);
      setSelectedLeads(new Set());
    } catch (error) {
      console.error('Error deleting leads:', error);
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(new Set(currentLeads.map(lead => lead.id!)));
    } else {
      setSelectedLeads(new Set());
    }
  };

  if (loading) {
    return <div>Loading leads...</div>;
  }

  return (
    <Container className="mt-5" fluid style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '0 20px'
    }}>
      {/* Header Toolbar */}
      <HeaderToolbar 
        onAdd={() => {
          setFormData({ email: null });
          setIsEditMode(false);
          setIsModalOpen(true);
        }} 
        onDelete={handleDeleteSelected} 
        selectedCount={selectedLeads.size} 
      />

      {/* Lead Form Modal */}
      <LeadFormModal 
        show={isModalOpen} 
        onHide={() => setIsModalOpen(false)} 
        formData={formData} 
        onChange={handleChange} 
        onSubmit={handleSubmit} 
      />

      <Card className="shadow-sm" style={{ flex: 1 }}>
        {/* Pagination and Entries Info */}
        <Row className="p-3 align-items-center g-2">
          <Col xs={12} lg={6} className="d-flex align-items-center">
            <PaginationComponent 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          </Col>
          <Col xs={12} lg={6} className="text-lg-end">
            <span className="text-muted">
              Showing {indexOfFirstLead + 1} to {Math.min(indexOfLastLead, leads.length)} of {leads.length} entries
            </span>
          </Col>
        </Row>

        {/* Leads Table */}
        <div className="table-responsive" style={{ 
          padding: '0 20px', 
          overflowX: 'auto',
          maxWidth: '100%'
        }}>
          <LeadsTable 
            leads={currentLeads} 
            selectedLeads={selectedLeads} 
            onSelectAll={handleSelectAll} 
            onSelectOne={handleCheckboxChange} 
            renderActions={(lead) => (
              <FaEdit style={{ cursor: 'pointer' }} onClick={() => handleEditClick(lead)} />
            )}
          />
        </div>
      </Card>
    </Container>
  );
};

export default Leads;
