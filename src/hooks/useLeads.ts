import { useState, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import { Lead, LeadConnection } from '../types/lead';
import config from '../../amplify_outputs.json';

const client = generateClient();

export function useLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debug function to test direct API connection
  const testDirectApiConnection = async () => {
    const response = await fetch(config.data.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': config.data.api_key
      },
      body: JSON.stringify({
        query: `
          query TestConnection {
            listLeads {
              items {
                id
                firstName
                lastName
              }
            }
          }
        `
      })
    });
    return await response.json();
  };

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      // Debug: Log configuration
      console.log('API Configuration:', {
        endpoint: config.data.url,
        region: config.data.aws_region,
        apiKey: config.data.api_key?.substring(0, 8) + '...'
      });

      // Test direct API connection first
      console.log('Testing direct API connection...');
      const directTest = await testDirectApiConnection();
      console.log('Direct API test result:', directTest);

      // Proceed with Amplify client
      console.log('Fetching with Amplify client...');
      const response = await client.graphql<{ listLeads: LeadConnection }>({
        query: queries.listLeads,
        authMode: 'apiKey',
        apiKey: config.data.api_key
      });

      console.log('Amplify client response:', JSON.stringify(response, null, 2));

      if (response.data?.listLeads?.items) {
        console.log(`Found ${response.data.listLeads.items.length} leads`);
        setLeads(response.data.listLeads.items);
      } else {
        console.warn('No leads found in response');
        setLeads([]);
      }
    } catch (err) {
      console.error('Fetch error:', {
        message: err.message,
        name: err.name,
        response: err.response,
        stack: err.stack
      });
      setError(`Failed to fetch leads: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  return { leads, loading, error, fetchLeads };
}