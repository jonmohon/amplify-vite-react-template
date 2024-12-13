// src/graphql/queries.ts
export const listLeads = /* GraphQL */ `
  query ListLeads {
    listLeads {
      items {
        leadId
        ownerId
        firstName
        lastName
        email
        phoneNumber
        company
        jobTitle
        industry
        leadSource
        campaignId
        status
        stage
        createdAt
        updatedAt
      }
    }
  }
`;