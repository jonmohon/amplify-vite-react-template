import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeaderToolbar from '../components/HeaderToolbar';
import LeadFormModal from '../components/LeadFormModal';
import LeadsTable from '../components/LeadsTable';
import PaginationComponent from '../components/PaginationComponent';
import useLeads from '../hooks/useLeads';
import { LeadData } from '../types';

const Leads: React.FC = () => {
  const { leads, addLead, removeLeads } = useLeads();
  const [formData, setFormData] = useState<LeadData>({ email: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;

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

    if (name === 'score' || name === 'deal_value') {
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
      await addLead(formData);
      setIsModalOpen(false);
      setFormData({ email: '' });
    } catch (error) {
      console.error('Error creating lead:', error);
    }
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
      await removeLeads(Array.from(selectedLeads));
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

  return (
      <Container className="mt-5" fluid style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        padding: '0 20px'  // Add padding to prevent bleeding
      }}>
      {/* Header Toolbar */}
      <HeaderToolbar 
        onAdd={() => setIsModalOpen(true)} 
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
          />
        </div>

      </Card>
    </Container>
  );
};

export default Leads;
