import { useState, useCallback } from 'react';
import { generateClient } from 'aws-amplify/data';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import type { Schema } from '../../amplify/data/resource';

// Configure Amplify
Amplify.configure(outputs);

// Generate client with proper typing
const client = generateClient<Schema>({
  authMode: 'userPool'
});

export const useLeads = () => {
  const [leads, setLeads] = useState<Schema['Lead']['type'][]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, errors } = await client.models.Lead.list({
        // Remove pagination parameters to fetch all leads
      });

      if (errors) {
        throw new Error(errors.map(e => e.message).join(', '));
      }

      setLeads(data);
      return data; // Return the fetched leads
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'Failed to fetch leads';
      
      setError(errorMessage);
      console.error('Leads fetch error:', errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { 
    leads, 
    loading, 
    error, 
    fetchLeads 
  };
};
