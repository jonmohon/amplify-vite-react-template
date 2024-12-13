// Define Lead type based on schema
export interface LeadResponse {
    leadId: string;
    ownerId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    createdAt: string;
  }
  
  // Define query response type
  export interface ListLeadsResponse {
    listLeads: {
      items: LeadResponse[];
      nextToken?: string;
    };
  }
  
  // Define the GraphQL query
  export const listLeads = /* GraphQL */ `
    query ListLeads(
      $filter: ModelLeadFilterInput
      $limit: Int
      $nextToken: String
    ) {
      listLeads(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          leadId
          ownerId
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  `;