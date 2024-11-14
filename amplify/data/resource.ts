import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Lead: a.model({
    lead_id: a.id(),
    owner_id: a.id(),
    first_name: a.string(),
    last_name: a.string(),
    email: a.string(),
    phone_number: a.string(),
    company: a.string(),
    job_title: a.string(),
    industry: a.string(),
    lead_source: a.string(),
    campaign_id: a.id(),
    campaign: a.belongsTo("Campaign", "campaign_id"),
    user: a.belongsTo("User", "owner_id"),
    address: a.customType({
      street: a.string(),
      city: a.string(),
      state: a.string(),
      zip: a.string(),
      country: a.string(),
    }),
    timezone: a.string(),
    preferred_contact_method: a.string(),
    status: a.string(),
    stage: a.string(),
    last_contacted: a.datetime(),
    next_followup_date: a.datetime(),
    interactions: a.hasMany("Interaction", "lead_id"),
    tasks: a.hasMany("Task", "lead_id"),
    email_opens: a.integer(),
    link_clicks: a.integer(),
    website_visits: a.integer(),
    notes: a.hasMany("Note", "lead_id"),
    custom_fields: a.hasMany("CustomField", "lead_id"),
    score: a.integer(),
    score_last_updated: a.datetime(),
    team: a.string(),
    conversion_date: a.datetime(),
    deal_value: a.float(),
    conversion_source: a.string(),
    tags: a.string().array(),
    priority: a.string(),
  }).authorization(allow => [allow.owner()]),

  Campaign: a.model({
    campaign_id: a.id(),
    name: a.string(),
    description: a.string(),
    start_date: a.datetime(),
    end_date: a.datetime(),
    leads: a.hasMany("Lead", "campaign_id"),
  }).authorization(allow => [allow.publicApiKey()]),

  Interaction: a.model({
    interaction_id: a.id(),
    lead_id: a.id(),
    lead: a.belongsTo("Lead", "lead_id"),
    type: a.string(),
    date: a.datetime(),
    outcome: a.string(),
    notes: a.string(),
  }).authorization(allow => [allow.owner()]),

  Task: a.model({
    task_id: a.id(),
    lead_id: a.id(),
    lead: a.belongsTo("Lead", "lead_id"),
    description: a.string(),
    deadline: a.datetime(),
    completed: a.boolean(),
  }).authorization(allow => [allow.owner()]),

  Note: a.model({
    note_id: a.id(),
    lead_id: a.id(),
    lead: a.belongsTo("Lead", "lead_id"),
    content: a.string(),
  }).authorization(allow => [allow.owner()]),

  CustomField: a.model({
    field_id: a.id(),
    lead_id: a.id(),
    lead: a.belongsTo("Lead", "lead_id"),
    field_name: a.string(),
    field_value: a.string(),
  }).authorization(allow => [allow.owner()]),

  User: a.model({
    user_id: a.id(),
    username: a.string(),
    email: a.string(),
    leads: a.hasMany("Lead", "owner_id"),
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
