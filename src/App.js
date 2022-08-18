import AllTasks from './components/AllTasks';
import Header from './components/Header';
import SideBar from './components/SideBar';
import data from './data/defaultTasks';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'


function App() {
  const [defaultTasks, setDefaultTasks] = useState(data);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked)
    console.log(checked);
  }
 
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setDefaultTasks([newTask, ...defaultTasks])
  }

  return (
    <div className="App">
      <Header addTask={addTask} />
      <div className='mainContentContainer'>
        <div className='homeLeftSide'>
          <SideBar />
        </div>

        <div className='homeRightSide'>
          <AllTasks checked={checked} handleChange={handleChange} defaultTasks={defaultTasks} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
