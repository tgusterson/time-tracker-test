import { useState } from 'react';
import TimerContext from './components/TimerContext';
import TaskList from './components/TaskList';
import TaskView from './components/TaskView';
import TrackerView from './components/TrackerView';
import '@fontsource/open-sans';
import './styles/index.scss';

function App() {
  const [selectedTaskID, setSelectedTaskID] = useState();
  const [selectedTaskName, setSelectedTaskName] = useState();
  const [timerStopped, setTimerStopped] = useState(true);
  return (
    <div className='App'>
      <div className='app-container'>
        <TimerContext.Provider value={{ timerStopped, setTimerStopped }}>
          <TaskList
            setSelectedTaskID={setSelectedTaskID}
            setSelectedTaskName={setSelectedTaskName}
          />
          <div className='task-view-container'>
            {selectedTaskID && (
              <TrackerView
                selectedTaskID={selectedTaskID}
                selectedTaskName={selectedTaskName}
              />
            )}
            <TaskView selectedTaskID={selectedTaskID} />
          </div>
        </TimerContext.Provider>
      </div>
    </div>
  );
}

export default App;
