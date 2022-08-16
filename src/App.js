import AllTasks from './components/AllTasks';
import Header from './components/Header';
import SideBar from './components/SideBar';
import data from './data/defaultTasks';
import {useState} from 'react';

function App() {
  const [defaultTasks, setDefaultTasks] = useState(data) 
 
  return (
    <div className="App">
      <Header />
      <div className='mainContentContainer'>
        <div className='homeLeftSide'>
          <SideBar />
        </div>

        <div className='homeRightSide'>
          <AllTasks defaultTasks={defaultTasks} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
