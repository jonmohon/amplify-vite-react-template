import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Lead: a.model({
    content: a.string(),
    firstName: a.string().required(),
    lastName: a.string().required(),
    email: a.string().required(),
    phoneNumber: a.string(),
    company: a.string(),
    jobTitle: a.string(),
    industry: a.string(),
    status: a.string().default('NEW'),
    notes: a.string(),
    customFields: a.json()
  })
  .authorization(allow => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  }
});