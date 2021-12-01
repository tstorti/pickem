import dotenv  from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema, root } from './graphql/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//add graphql endpoint
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));

app.get('/health', (req, res) => {
	res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});