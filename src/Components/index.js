import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://randomuser.me/api/", // yahan apne GraphQL endpoint ka URL dalein
  cache: new InMemoryCache(),
});
