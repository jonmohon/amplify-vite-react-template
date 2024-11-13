import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import HeaderToolbar from '../components/HeaderToolbar';
import LeadFormModal from '../components/LeadFormModal';
import LeadsTable from '../components/LeadsTable';
import PaginationComponent from '../components/PaginationComponent';
import { fetchLeads, createLead, deleteLead } from '../services/leadService';
import { LeadData } from '../types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Leads: React.FC = () => {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [formData, setFormData] = useState<LeadData>({ email: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const leadsData = await fetchLeads();
      setLeads(leadsData as LeadData[]);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let finalValue: string | number = value;
    
    // Handle number fields
    if (name === 'score' || name === 'deal_value') {
      finalValue = value === '' ? 0 : Number(value);
    }
    
    setFormData(prevData => ({
      ...prevData,
      [name]: finalValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createLead(formData);
      await loadLeads();
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
      const deletePromises = Array.from(selectedLeads).map(id => deleteLead(id));
      await Promise.all(deletePromises);
      await loadLeads();
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
    <Container className="mt-5" fluid>
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

      {/* Pagination and Entries Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #dee2e6', background: 'white' }}>
        <div>
          Showing {indexOfFirstLead + 1} to {Math.min(indexOfLastLead, leads.length)} of {leads.length} entries
        </div>
        <PaginationComponent 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </div>

      {/* Leads Table */}
      <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 200px)', border: '1px solid #dee2e6', borderRadius: '4px' }}>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{ height: '100%', overflowY: 'auto' }}>
            <LeadsTable 
              leads={currentLeads} 
              selectedLeads={selectedLeads} 
              onSelectAll={handleSelectAll} 
              onSelectOne={handleCheckboxChange} 
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Leads;
