export interface Lead {
    leadId: string;
    ownerId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    company?: string;
    jobTitle?: string;
    industry?: string;
    leadSource?: string;
    campaignId?: string;
    timezone?: string;
    preferredContactMethod?: string;
    status?: string;
    stage?: string;
    lastContacted?: string;
    nextFollowupDate?: string;
    emailOpens?: number;
    linkClicks?: number;
    websiteVisits?: number;
    createdAt: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zip?: string;
      country?: string;
    };
  }