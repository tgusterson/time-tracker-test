import { gql } from '@apollo/client';
import TIMERECORD_INFO from '../fragments/TIMERECORD_INFO';

const stopTimerecord = gql`
  ${TIMERECORD_INFO}
  mutation STOP_TIMERECORD($input: StartTimerecordInput) {
    stopTimerecord(input: $input) {
      ...TIMERECORD_INFO
    }
  }
`;

export default stopTimerecord;
