import AllTasks from './components/AllTasks';
import Header from './components/Header';
import SideBar from './components/SideBar';
import data from './data/defaultTasks';
import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {

  //Format Date
  const current = new Date();
  const CurrentDate = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  //Task array and local storage
  const savedTasks = JSON.parse(localStorage.getItem('defaultTasks'))
  const [defaultTasks, setDefaultTasks] = useState(savedTasks.length > 1 ? savedTasks : data);
  const [filteredList, setFilteredList] = useState(defaultTasks);

  const [open, setOpen] = useState(false);

  //DarkMode
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  // Local Storage
  useEffect(() => {
    localStorage.setItem('defaultTasks', JSON.stringify(defaultTasks))
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList = theme;
  }, [theme]);

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
    setFilteredList(defaultTasks.filter((item) => item.id !== id));
  }
 
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    newTask.checked = false;
    newTask.date = CurrentDate;
    setFilteredList([newTask, ...defaultTasks])
    setDefaultTasks([newTask, ...defaultTasks])
  }
  
  return (
    <div style={{backgroundColor: theme === 'light' ? '#dadada' : ''}} className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} open={open} setOpen={setOpen} defaultTasks={defaultTasks} addTask={addTask}/>
      <div className='mainContentContainer'>
        <div style={{backgroundColor: theme === 'light' ? '#dadada' : ''}} className={`homeLeftSide home-${theme}`}>
          <SideBar theme={theme} filteredList={filteredList} setDefaultTasks={setDefaultTasks} />
        </div>

        <div className='homeRightSide'>
          <AllTasks theme={theme} open={open} setOpen={setOpen} editTask={editTask} deleteTask={deleteTask} addTask={addTask} defaultTasks={defaultTasks} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
