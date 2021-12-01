import { buildSchema } from 'graphql';

//construct basic schema
export const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

//resolver function
export const root = {
	hello: () => {
		return 'Hello world!';
	},
};