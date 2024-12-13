export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  company?: string;
  jobTitle?: string;
  industry?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface LeadConnection {
  items: Lead[];
}