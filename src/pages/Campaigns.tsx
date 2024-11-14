import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeaderToolbar from '../components/HeaderToolbar';
import CampaignFormModal from '../components/CampaignFormModal';
import CampaignsTable from '../components/CampaignsTable';
import PaginationComponent from '../components/PaginationComponent';
import { CampaignData } from '../types';

export interface CampaignCreate {
  id?: string;
  name: string;
  description?: string;
  created_at: Date;
  // Add other relevant properties
}

const Campaigns: React.FC = () => {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [formData, setFormData] = useState<CampaignData>({ 
    name: '',
    leads_count: 0,
    conversion_rate: 0,
    created_at: '',
    status: 'active',
    id: '',
    subject: '',
    textContent: '',
    htmlContent: '',
    description: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampaigns, setSelectedCampaigns] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const campaignsPerPage = 10;

  const indexOfLastCampaign = currentPage * campaignsPerPage;
  const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
  const currentCampaigns = campaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);
  const totalPages = Math.ceil(campaigns.length / campaignsPerPage);
  

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCampaign: CampaignData = {
      ...formData,
      id: Date.now().toString(),
      created_at: ''
    };
    
    setCampaigns(prevCampaigns => [...prevCampaigns, newCampaign]);
    setIsModalOpen(false);
    setFormData({ 
      name: '',
      leads_count: 0,
      conversion_rate: 0,
      created_at: '',
      status: 'active',
      id: '',
      subject: '',
      textContent: '',
      htmlContent: '',
      description: ''
    });
  };

  const handleCheckboxChange = (campaignId: string) => {    const newSelected = new Set(selectedCampaigns);
    if (newSelected.has(campaignId)) {
      newSelected.delete(campaignId);
    } else {
      newSelected.add(campaignId);
    }
    setSelectedCampaigns(newSelected);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCampaigns(new Set(currentCampaigns.map(campaign => campaign.id).filter((id): id is string => id !== undefined)));
    } else {
      setSelectedCampaigns(new Set());
    }
  };

  const handleDeleteSelected = async () => {
    setCampaigns(prevCampaigns => 
      prevCampaigns.filter(campaign => campaign.id !== undefined && !selectedCampaigns.has(campaign.id))
    );
    setSelectedCampaigns(new Set());
  };

  return (
    <Container className="mt-5" fluid style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '0 20px'
    }}>
      <HeaderToolbar 
        onAdd={() => setIsModalOpen(true)} 
        onDelete={handleDeleteSelected} 
        selectedCount={selectedCampaigns.size} 
      />

      <CampaignFormModal 
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit} onEditorChange={function (): void {
          throw new Error('Function not implemented.');
        } }      />

      <Card className="shadow-sm" style={{ flex: 1 }}>
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
              Showing {indexOfFirstCampaign + 1} to {Math.min(indexOfLastCampaign, campaigns.length)} of {campaigns.length} entries
            </span>
          </Col>
        </Row>

        <div className="table-responsive" style={{ 
          padding: '0 20px', 
          overflowX: 'auto',
          maxWidth: '100%'
        }}>
          <CampaignsTable 
            campaigns={currentCampaigns} 
            selectedCampaigns={selectedCampaigns} 
            onSelectAll={handleSelectAll} 
            onSelectOne={handleCheckboxChange} 
          />
        </div>
      </Card>
    </Container>
  );
};export default Campaigns;
