import { gql, ApolloServer } from "apollo-server-micro";

const typeDefs = gql`
  type User {
    id: ID
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
      createUser(id: ID): User
  }
`;

let users = []

const resolvers = {
  Query: {
    getUsers: () => users
  },
  Mutation: {
      createUser(parent, args) {
          console.log(args)
          users.push({ id: args.id })
          return args.id
      }
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};