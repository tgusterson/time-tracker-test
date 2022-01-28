import { useEffect, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import getTask from '../data/queries/getTask';
import TimerContext from './TimerContext';
import Loader from './Loader';
import { convertMins } from '../utils/timeUtils';

const TaskView = ({ selectedTaskID }) => {
  const { timerStopped } = useContext(TimerContext);

  const [getSelectedTask, { loading, error, data }] = useLazyQuery(getTask);

  useEffect(() => {
    getSelectedTask({
      variables: {
        id: selectedTaskID,
      },
    });
  }, [selectedTaskID, timerStopped]);

  if (error) return <p>An error has occurred: {error.toString()}</p>;

  return (
    <div>
      {loading && <Loader />}
      {selectedTaskID && !loading && data && (
        <>
          <h3 className='task-view-taskname'>{data.tasks[0].name}</h3>
          <h4 className='task-view-timespent'>
            Total Time Spent: {convertMins(data.tasks[0].taskTotalTimespent)}
          </h4>
          <div className='task-view-table'>
            <table>
              <thead>
                <tr>
                  <th>Notes</th>
                  <th>Start Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Time Spent</th>
                  <th>Tracked By</th>
                </tr>
              </thead>
              <tbody>
                {data.tasks[0].timerecords
                  .map((timerecord) => {
                    return (
                      <tr key={timerecord.id}>
                        <td>{timerecord.notes}</td>
                        <td>{timerecord.startdate.slice(0, 10)}</td>
                        <td>{timerecord.startdate.slice(11, 16)}</td>
                        <td>{timerecord.enddate.slice(11, 16)}</td>
                        <td>{convertMins(timerecord.timespent)}</td>
                        <td>{timerecord.contact.fullname}</td>
                      </tr>
                    );
                  })
                  .reverse()}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskView;
