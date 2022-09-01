import AllTasks from './components/AllTasks';
import Header from './components/Header';
import SideBar from './components/SideBar';
import data from './data/defaultTasks';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {

  //Format Date
  const current = new Date();
  const CurrentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  //Task array
  const [defaultTasks, setDefaultTasks] = useState(data);
  const [filteredList, setFilteredList] = useState(defaultTasks);


  const [open, setOpen] = useState(false);


  //Display All Tasks
  const displayAll = () => {
    setDefaultTasks(filteredList)
  }
  //Display Completed Tasks
  const displayCompleted = () => {
    setDefaultTasks(filteredList.filter((item) => item.checked === true));
  }
  //Display Incomplete Tasks
  const displayIncomplete = () => {
    setDefaultTasks(filteredList.filter((item) => item.checked === false));
  }
  //Display Todays Tasks
  const displayToday = () => {
    setDefaultTasks(filteredList.filter((item) => item.date === CurrentDate));
  }

  //Edit-Add-Delete Task Buttons
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
    newTask.checked = false;
    setFilteredList([newTask, ...defaultTasks])
    setDefaultTasks([newTask, ...defaultTasks])
  }
  //
  
  return (
    <div className="App">
      <Header open={open} setOpen={setOpen} defaultTasks={defaultTasks} addTask={addTask}/>
      <div className='mainContentContainer'>
        <div className='homeLeftSide'>
          <SideBar displayIncomplete={displayIncomplete} displayToday={displayToday} displayAll={displayAll}  displayCompleted={displayCompleted} defaultTasks={defaultTasks} />
        </div>

        <div className='homeRightSide'>
          <AllTasks open={open} setOpen={setOpen} editTask={editTask} deleteTask={deleteTask} addTask={addTask} defaultTasks={defaultTasks} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
