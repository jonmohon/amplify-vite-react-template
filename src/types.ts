// Comprehensive type definitions for Nexvato Admin

export interface LeadData {
  leadId?: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string | null | undefined;
  phoneNumber?: string | null;
  company?: string | null;
  jobTitle?: string | null;
  industry?: string | null;
  leadSource?: string | null;
  campaignId?: string | null;
  timezone?: string | null;
  preferredContactMethod?: string | null;
  status?: 'new' | 'contacted' | 'qualified' | 'unqualified';
  stage?: string | null;
  team?: string | null;
  conversionSource?: string | null;
  priority?: 'low' | 'medium' | 'high';
  score?: number | null;
  dealValue?: number | null;
}

export interface CampaignData {
  id: string;
  name: string;
  status: "active" | "completed" | "paused"; // Adjusted to match Campaign
  startDate?: Date;
  endDate?: Date;
  subject: string;
  textContent: string;
  htmlContent: string;
  budget?: number;
  description?: string;
  leads_count: number;  // Consistent camelCase
  conversion_rate: number;
  created_at: string;  // Consistent camelCase
}

// Derived types with clear intentions
export type LeadCreate = Omit<LeadData, 'id'>;
export type LeadUpdate = Partial<LeadData>;

export type CampaignCreate = Omit<CampaignData, 'id' | 'createdAt'>;
export type CampaignUpdate = Partial<CampaignData>;

// Utility type for consistent pagination
export interface PaginationParams {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}


// Response type for list operations
export interface ListResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
