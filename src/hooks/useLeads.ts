import { useState, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';

const client = generateClient();

export function useLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      console.log('Fetching leads...');
      const response = await client.graphql({
        query: queries.listLeads,
        authMode: 'userPool',
        authToken: await client.getAuthToken() // Add this line
      });
      
      console.log('Response:', response);
      
      if (response.data?.listLeads?.items) {
        setLeads(response.data.listLeads.items);
      }
    } catch (err) {
      console.error('Error details:', {
        message: err.message,
        code: err.code,
        type: err.type,
        path: err?.path
      });
      setError(err instanceof Error ? err.message : 'Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  }, []);

  return { leads, loading, error, fetchLeads };
}