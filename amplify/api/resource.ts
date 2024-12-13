import { a, defineData } from '@aws-amplify/backend';
import type { ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Lead: a.model({
    leadId: a.id().required(),
    firstName: a.string(),
    lastName: a.string(),
    email: a.string(),
    createdAt: a.datetime().required(),
    updatedAt: a.datetime(),
    owner: a.string(),
  }).authorization(allow => [
    allow.owner(),
    allow.publicApiKey().to(['read'])
  ])
});

export const api = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 365
    }
  }
});

export type Schema = ClientSchema<typeof schema>;