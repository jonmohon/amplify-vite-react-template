import { useState, useEffect } from 'react';
import { fetchLeads, createLead, deleteLead } from '../services/leadService';
import { LeadData } from '../types';

const useLeads = () => {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const leadsData = await fetchLeads();
      // Ensure the data matches LeadData type
      const processedLeads = leadsData.map(lead => ({
        ...lead,
        status: lead.status && ['new', 'contacted', 'qualified', 'unqualified'].includes(lead.status as string) 
          ? (lead.status as "new" | "contacted" | "qualified" | "unqualified")
          : "new",
        priority: lead.priority && ['low', 'medium', 'high'].includes(lead.priority as string)
          ? (lead.priority as "low" | "medium" | "high")
          : undefined
      }));
      setLeads(processedLeads as LeadData[]);
    } catch (err) {
      setError('Error fetching leads');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addLead = async (lead: LeadData) => {
    setLoading(true);
    try {
      await createLead(lead);
      await loadLeads();
    } catch (err) {
      setError('Error creating lead');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeLeads = async (ids: string[]) => {
    setLoading(true);
    try {
      await Promise.all(ids.map(id => deleteLead(id)));
      await loadLeads();
    } catch (err) {
      setError('Error deleting leads');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  return { leads, loading, error, addLead, removeLeads };
};

export default useLeads;
