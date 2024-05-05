const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./schema');
const JsonplaceholderAPI = require('./datasources/user-api');
const NarutoAPI = require('./datasources/naruto-api')
const IsroAPI = require('./datasources/isro-api')
const resolvers = require('./resolver')

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server
            return {
                datasources: {
                    jsonplaceholderAPI: new JsonplaceholderAPI({ cache }),
                    narutoAPI: new NarutoAPI({ cache }),
                    isroAPI: new IsroAPI({ cache }),
                },
            };
        }
    });
    console.log(`Server ready at ${url}`)
}
startApolloServer();