import { useState, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import { type Schema } from '../resource';
import * as queries from '../graphql/queries';

const client = generateClient<Schema>();

export function useLeads() {
  const [leads, setLeads] = useState<Schema['Lead'][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const response = await client.graphql({
        query: queries.listLeads,
        authMode: 'userPool'
      });
      
      if ('data' in response) {
        setLeads(response.data.listLeads.items);
      }
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  }, []);

  return { leads, loading, error, fetchLeads };
}