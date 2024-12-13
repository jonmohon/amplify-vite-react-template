export const listLeads = /* GraphQL */ `
  query ListLeads {
    listLeads {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        company
        jobTitle
        industry
        status
        createdAt
        updatedAt
      }
    }
  }
`;