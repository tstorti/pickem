const stubGames = [
	{ id: '0001', homeTeam: 'Bears', awayTeam: 'Packers', date: '2021-12-05' },
	{ id: '0002', homeTeam: 'Vikings', awayTeam: 'Lions', date: '2021-12-05' },
];

export const typeDefs = `
  type Game {
    id: String
    homeTeam: String
    awayTeam: String
    date: String
  }

  extend type Query {
    games(league: String, season: String): [Game]
  }
`;

export const resolvers = {
	Game: {
		id: obj => obj.id,
		homeTeam: obj => obj.homeTeam,
		awayTeam: obj => obj.awayTeam,
		date: obj => obj.date,
	},
	Query: {
		games: (root, args, context) => {
			//TODO - connect with DB
			return stubGames;
		},	
	},
};