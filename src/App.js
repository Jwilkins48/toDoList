import AllTasks from './components/AllTasks';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainContentContainer'>
        <div className='homeLeftSide'>
          <SideBar />
        </div>

        <div className='homeRightSide'>
          <AllTasks />
        </div>
      </div>
      
    </div>
  );
}

export default App;
