import AllTasks from './components/AllTasks';
import Header from './components/Header';
import SideBar from './components/SideBar';
import data from './data/defaultTasks';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {

  const [defaultTasks, setDefaultTasks] = useState(data);

  const editTask = (id, newToDo) => {
    const editedToDo = defaultTasks.map(item => {
      if(id === item.id){
        return { ...defaultTasks, task: newToDo}
      }
      return item;
    })
    setDefaultTasks(editedToDo);
  }

  const deleteTask = (id) => {
    setDefaultTasks(defaultTasks.filter((item) => item.id !== id));
  }
 
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setDefaultTasks([newTask, ...defaultTasks])
  }

  return (
    <div className="App">
      <Header />
      <div className='mainContentContainer'>
        <div className='homeLeftSide'>
          <SideBar defaultTasks={defaultTasks} />
        </div>

        <div className='homeRightSide'>
          <AllTasks editTask={editTask} deleteTask={deleteTask} addTask={addTask} defaultTasks={defaultTasks} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
