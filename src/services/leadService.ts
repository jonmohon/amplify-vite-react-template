// leadService.ts

import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

// Configure Amplify
Amplify.configure(outputs);

// Generate the data client
const client = generateClient<Schema>({
  authMode: 'userPool',
});

// Get all leads
export const fetchLeads = async () => {
  const { data: leads, errors } = await client.models.Lead.list();
  if (errors) {
    throw new Error(errors.join(', '));
  }
  return leads;
};

// Create new lead
export const createLead = async (leadData: any) => {
  const { data: newLead, errors } = await client.models.Lead.create(leadData);
  if (errors) {
    throw new Error(errors.join(', '));
  }
  return newLead;
};

// Update lead
export const updateLead = async (id: string, leadData: any) => {
  const { data: updatedLead, errors } = await client.models.Lead.update({
    id,
    ...leadData
  });
  if (errors) {
    throw new Error(errors.join(', '));
  }
  return updatedLead;
};

// Delete lead
export const deleteLead = async (id: string) => {
  const { data: deletedLead, errors } = await client.models.Lead.delete({
    id
  });
  if (errors) {
    throw new Error(errors.join(', '));
  }
  return deletedLead;
};

// Get single lead by ID
export const getLead = async (id: string) => {
  const { data: lead, errors } = await client.models.Lead.get({ id });
  if (errors) {
    throw new Error(errors.join(', '));
  }
  return lead;
};
