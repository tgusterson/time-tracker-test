import { gql } from '@apollo/client';
import TIMERECORD_INFO from '../fragments/TIMERECORD_INFO';

const startTimerecord = gql`
  ${TIMERECORD_INFO}
  mutation START_TIMERECORD($input: StartTimerecordInput) {
    startTimerecord(input: $input) {
      ...TIMERECORD_INFO
    }
  }
`;

export default startTimerecord;
