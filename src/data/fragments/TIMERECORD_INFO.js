import { gql } from '@apollo/client';

const TIMERECORD_INFO = gql`
  fragment TIMERECORD_INFO on Timerecord {
    id
    timespent
    startdate
    enddate
    running
    notes
    task {
      id
    }
    contact {
      id
      fullname
    }
  }
`;

export default TIMERECORD_INFO;
