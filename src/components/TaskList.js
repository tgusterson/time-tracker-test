import { useState, useContext } from 'react';
import { useQuery } from '@apollo/client';
import filterTasks from '../data/queries/filterTasks';
import TimerContext from './TimerContext';
import Loader from './Loader';

const TaskList = ({ setSelectedTaskID, setSelectedTaskName }) => {
  const { timerStopped } = useContext(TimerContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const toggleClass = (index) => setSelectedIndex(index);

  const { loading, error, data } = useQuery(filterTasks, {
    variables: {
      searchTerm,
    },
  });

  const handleUserSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  if (error) return <p>An error has occurred: {error.toString()}</p>;

  return (
    <div className='task-list-container'>
      <input
        className='task-list-search'
        placeholder='Search'
        type='text'
        value={searchTerm}
        onChange={(e) => handleUserSearch(e)}
      />

      {loading && <Loader />}
      {!loading && (
        <ul>
          {data.tasks.map((task, index) => {
            return (
              <li
                key={task.id}
                onClick={() => {
                  if (timerStopped === true) {
                    setSelectedTaskID(task.id);
                    setSelectedTaskName(task.name);
                    toggleClass(index);
                  }
                }}
                className={`task-list-item ${
                  timerStopped === false && 'task-list-item-disabled'
                } ${index === selectedIndex && 'task-list-item-selected'}
                `}
              >
                {task.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
