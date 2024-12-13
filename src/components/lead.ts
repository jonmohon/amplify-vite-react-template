export interface Lead {
    id: string;
    name: string;
    email: string;
    phone?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface LeadConnection {
    items: Lead[];
    nextToken?: string | null;
  }
  
  export interface ListLeadsResponse {
    listLeads: LeadConnection;
  }