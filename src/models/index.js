// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Like, Users, Group } = initSchema(schema);

export {
  Like,
  Users,
  Group
};