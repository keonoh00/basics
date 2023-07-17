import { ApolloServer, gql } from "apollo-server";

// Shape of the data
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
