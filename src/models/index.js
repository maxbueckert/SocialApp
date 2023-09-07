// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Connections, Users, UsersConnections } = initSchema(schema);

export {
  Connections,
  Users,
  UsersConnections
};