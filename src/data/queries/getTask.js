import { gql } from '@apollo/client';
import TIMERECORD_INFO from '../fragments/TIMERECORD_INFO';

const GET_TASK = gql`
  ${TIMERECORD_INFO}
  query GET_TASK($id: Int) {
    tasks(
      input: {
        limit: 1
        orderby: { name: asc }
        where: {
          displaytype: { NEQ: heading }
          status: { EQ: active }
          id: { EQ: $id }
        }
      }
    ) {
      id
      name
      timerecords {
        ...TIMERECORD_INFO
      }
      taskTotalTimespent: timespent
    }
  }
`;

export default GET_TASK;
