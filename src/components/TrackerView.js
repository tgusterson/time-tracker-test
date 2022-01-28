import { useContext } from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import startTimerecord from '../data/mutations/startTimerecord';
import stopTimerecord from '../data/mutations/stopTimerecord';
import Timer from './Timer';
import TimerContext from './TimerContext';

const TrackerView = ({ selectedTaskID, selectedTaskName }) => {
  const [startDate, setStartDate] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const { timerStopped, setTimerStopped } = useContext(TimerContext);

  const [startTimerecordMutation, { loading, data }] =
    useMutation(startTimerecord);
  const [stopTimerecordMutation, stopData] = useMutation(stopTimerecord);

  const handleClick = () => {
    if (timerStarted === false) {
      setStartDate(null);
      startTimerecordMutation({
        variables: {
          input: {
            taskid: selectedTaskID,
            notes: selectedTaskName,
          },
        },
      });
      setTimerStarted(true);
      setTimerStopped(false);
    }

    if (timerStarted === true) {
      stopTimerecordMutation({
        variables: {
          input: {
            taskid: selectedTaskID,
          },
        },
        onCompleted() {
          setStartDate(null);
          setTimerStarted(false);
          setTimerStopped(true);
        },
      });
    }
  };

  return (
    <div className='trackerview-container'>
      {timerStarted === false && <p className='timer'>00:00:00</p>}
      {!loading && timerStarted === true && (
        <>
          <Timer startDate={data.startTimerecord.startdate} />
        </>
      )}
      <button className='timer-button' onClick={() => handleClick()}>
        {timerStarted === false ? 'START' : 'STOP'}
      </button>
    </div>
  );
};

export default TrackerView;
