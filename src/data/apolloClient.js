import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_PROWORKFLOW_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: process.env.REACT_APP_PROWORKFLOW_API_KEY,
  },
});

export default client;
