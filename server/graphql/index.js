import { makeExecutableSchema } from '@graphql-tools/schema';
import merge from 'lodash.merge';

import { typeDefs as UsersTypeDefs, resolvers as usersResolvers } from './users/index.js';
import { typeDefs as GamesTypeDefs, resolvers as gamesResolvers } from './games/index.js';

const Query = `
  type Query {
    _empty: String
  }
`;

export const schema = makeExecutableSchema({
	typeDefs: [ Query, UsersTypeDefs, GamesTypeDefs ],
	resolvers: merge(gamesResolvers, usersResolvers),
});