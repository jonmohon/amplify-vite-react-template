import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// Adding Lead model with owner-based authorization
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.owner()]), // Update authorization to use owner-based rules

  Lead: a
    .model({
      name: a.string(),
      email: a.string(),
      phone: a.string(), // Optional field by default
      company: a.string(), // Optional field by default
    })
    .authorization((allow) => [allow.owner()]), // Only the record owner can access their leads
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
