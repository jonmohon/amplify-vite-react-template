import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Lead: a.model({
    leadId: a.id().required(),
    ownerId: a.id(),
    firstName: a.string(),
    lastName: a.string(),
    email: a.string(),
    phoneNumber: a.string(),
    company: a.string(),
    jobTitle: a.string(),
    industry: a.string(),
    leadSource: a.string(),
    campaignId: a.id(),
    campaign: a.belongsTo("Campaign", "campaignId"),
    user: a.belongsTo("User", "ownerId"),
    address: a.customType({
      street: a.string(),
      city: a.string(),
      state: a.string(),
      zip: a.string(),
      country: a.string(),
    }),
    timezone: a.string(),
    preferredContactMethod: a.string(),
    status: a.string(),
    stage: a.string(),
    lastContacted: a.datetime(),
    nextFollowupDate: a.datetime(),
    interactions: a.hasMany("Interaction", "leadId"),
    tasks: a.hasMany("Task", "leadId"),
    emailOpens: a.integer(),
    linkClicks: a.integer(),
    websiteVisits: a.integer(),
    notes: a.hasMany("Note", "leadId"),
    customFields: a.hasMany("CustomField", "leadId"),
    score: a.integer(),
    scoreLastUpdated: a.datetime(),
    team: a.string(),
    conversionDate: a.datetime(),
    dealValue: a.float(),
    conversionSource: a.string(),
    tags: a.string().array(),
    priority: a.string(),
  }).authorization(allow => [allow.owner()]),

  Campaign: a.model({
    campaignId: a.id(),
    name: a.string(),
    description: a.string(),
    startDate: a.datetime(),
    endDate: a.datetime(),
    leads: a.hasMany("Lead", "campaignId"),
  }).authorization(allow => [allow.publicApiKey()]),

  Interaction: a.model({
    interactionId: a.id(),
    leadId: a.id(),
    lead: a.belongsTo("Lead", "leadId"),
    type: a.string(),
    date: a.datetime(),
    outcome: a.string(),
    notes: a.string(),
  }).authorization(allow => [allow.owner()]),

  Task: a.model({
    taskId: a.id(),
    leadId: a.id(),
    lead: a.belongsTo("Lead", "leadId"),
    description: a.string(),
    deadline: a.datetime(),
    completed: a.boolean(),
  }).authorization(allow => [allow.owner()]),

  Note: a.model({
    noteId: a.id(),
    leadId: a.id(),
    lead: a.belongsTo("Lead", "leadId"),
    content: a.string(),
  }).authorization(allow => [allow.owner()]),

  CustomField: a.model({
    fieldId: a.id(),
    leadId: a.id(),
    lead: a.belongsTo("Lead", "leadId"),
    fieldName: a.string(),
    fieldValue: a.string(),
  }).authorization(allow => [allow.owner()]),

  User: a.model({
    userId: a.id(),
    username: a.string(),
    email: a.string(),
    leads: a.hasMany("Lead", "ownerId"),
  }).authorization(allow => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    }
  },
});
