// amplify/data/resource.ts
import { a, defineData } from '@aws-amplify/backend';

export const data = defineData({
  schema: a.schema({
    Lead: a.model({
      id: a.id().required(),
      firstName: a.string(),
      lastName: a.string(),
      email: a.string(),
      phoneNumber: a.string(),
      company: a.string(),
      jobTitle: a.string(),
      industry: a.string(),
      leadSource: a.string(),
      campaignId: a.string(),
      status: a.string(),
      stage: a.string(),
      createdAt: a.datetime().required(),
      updatedAt: a.datetime()
    }).authorization([
      a.allow.owner(),
      a.allow.public().to(['read'])
    ])
  }),
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30
    }
  }
});