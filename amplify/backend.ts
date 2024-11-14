import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
// import { api } from './api/resource';

defineBackend({
  auth,
  data,
});
