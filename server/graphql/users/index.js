const stubUsers = [
	{ id: '0001', firstName: 'Gob', lastName: 'Bluth' },
	{ id: '0002', firstName: 'Buster', lastName: 'Bluth' },
];

export const typeDefs = `
  type User {
    id: String
    firstName: String
    lastName: String
  }

  extend type Query {
    users: [User]
  }
`;

export const resolvers = {
	User: {
		id: obj => obj.id,
		firstName: obj => obj.firstName,
		lastName: obj => obj.lastName,
	},
	Query: {
		users: () => {
			//TODO - connect with DB
			return Promise.resolve(stubUsers);
		},
	},
};