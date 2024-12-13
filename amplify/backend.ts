import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { api } from './api/resource';
import { data } from './data/resource';

export const backend = defineBackend({
  auth,
  api,
  data
});