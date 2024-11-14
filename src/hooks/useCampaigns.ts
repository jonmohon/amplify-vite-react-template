import { useState, useEffect } from 'react';
import { CampaignData } from '../types';
import { CampaignCreate } from '../types';

const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);

  const addCampaign = async (campaign: CampaignCreate) => {
    const newCampaign: CampaignData = { 
        ...campaign, 
        id: Date.now().toString(),
        created_at: '',
        status: campaign.status || 'active'
    };
    setCampaigns([...campaigns, newCampaign]);
};
  const removeCampaigns = async (campaignIds: string[]) => {
    // Implement your API call here
    setCampaigns(campaigns.filter(campaign => !campaignIds.includes(campaign.id!)));
  };

  useEffect(() => {
    // Fetch initial campaigns data
  }, []);

  return { campaigns, addCampaign, removeCampaigns };
};

export default useCampaigns;
