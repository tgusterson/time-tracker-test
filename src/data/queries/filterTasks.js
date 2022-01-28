import { gql } from '@apollo/client';

const FILTER_TASKS = gql`
  query FILTER_TASKS($searchTerm: String) {
    tasks(
      input: {
        limit: 10
        orderby: { name: asc }
        where: {
          displaytype: { NEQ: heading }
          status: { EQ: active }
          name: { LIKE: $searchTerm }
        }
      }
    ) {
      id
      name
    }
  }
`;

export default FILTER_TASKS;
