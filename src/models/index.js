// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Connection, Like, Users } = initSchema(schema);

export {
  Connection,
  Like,
  Users
};