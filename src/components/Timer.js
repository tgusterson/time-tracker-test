import { useEffect, useState, useContext } from 'react';
import { convertSeconds, timeSince } from '../utils/timeUtils';
import Loader from './Loader';

const Timer = ({ startDate }) => {
  const timeStampLength = 8;
  const [localTimer, setLocalTimer] = useState(startDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTimer(convertSeconds(timeSince(new Date(localTimer))));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {localTimer !== null && localTimer.length === timeStampLength && (
        <p className='timer'>{localTimer}</p>
      )}
      {(localTimer === null || localTimer.length > timeStampLength) && (
        <Loader />
      )}
    </>
  );
};

export default Timer;
