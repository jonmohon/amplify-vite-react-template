import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// Define schema with required fields and relationships based on the provided docs
const schema = a.schema({
  Lead: a
    .model({
      lead_id: a.id().required(),
      first_name: a.string().required(),
      last_name: a.string().required(),
      email: a.string().required(),
      phone_number: a.string(),
      company: a.string(),
      job_title: a.string(),
      industry: a.string(),

      // Tracking Source & Campaign
      lead_source: a.string(),
      campaign_id: a.id(),
      campaign: a.belongsTo("Campaign", "campaign_id"),

      // Contact Information
      address: a.customType({
        street: a.string(),
        city: a.string(),
        state: a.string(),
        zip: a.string(),
        country: a.string(),
      }),
      timezone: a.string(),
      preferred_contact_method: a.string(),

      // Status & Lifecycle
      status: a.string(),
      stage: a.string(),
      last_contacted: a.datetime(),
      next_followup_date: a.datetime(),

      // Engagement & Activity
      interactions: a.hasMany("Interaction", "lead_id"),
      email_opens: a.integer(),
      link_clicks: a.integer(),
      website_visits: a.integer(),

      // Notes & Custom Fields
      notes: a.hasMany("Note", "lead_id"),
      custom_fields: a.hasMany("CustomField", "lead_id"),

      // Lead Score
      score: a.integer(),
      score_last_updated: a.datetime(),

      // Assignment & Ownership
      owner_id: a.id(),
      owner: a.belongsTo("User", "owner_id"),
      team: a.string(),

      // Conversion Data
      conversion_date: a.datetime(),
      deal_value: a.float(),
      conversion_source: a.string(),

      // Tags & Labels
      tags: a.string().array(),
      priority: a.string(),
    })
    .identifier(["lead_id"])
    .authorization((allow) => [allow.owner()]),

  Campaign: a
    .model({
      campaign_id: a.id().required(),
      name: a.string().required(),
      description: a.string(),
      start_date: a.datetime(),
      end_date: a.datetime(),
      leads: a.hasMany("Lead", "campaign_id"),
    })
    .identifier(["campaign_id"]),

  Interaction: a
    .model({
      interaction_id: a.id().required(),
      lead_id: a.id().required(),
      type: a.string().required(),
      date: a.datetime().required(),
      outcome: a.string(),
      notes: a.string(),
    })
    .identifier(["interaction_id"])
    .secondaryIndexes((index) => [index("lead_id")]),

  Note: a
    .model({
      note_id: a.id().required(),
      lead_id: a.id().required(),
      content: a.string().required(),
      created_at: a.datetime().required(),
      created_by: a.string(),
    })
    .identifier(["note_id"])
    .secondaryIndexes((index) => [index("lead_id")]),

  CustomField: a
    .model({
      field_id: a.id().required(),
      lead_id: a.id().required(),
      field_name: a.string().required(),
      field_value: a.string(),
    })
    .identifier(["field_id"])
    .secondaryIndexes((index) => [index("lead_id")]),

  User: a
    .model({
      user_id: a.id().required(),
      username: a.string().required(),
      email: a.string().required(),
      leads: a.hasMany("Lead", "owner_id"),
    })
    .identifier(["user_id"]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
