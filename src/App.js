import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './component/navbar/navbar';
import Tour from './component/tourlist';
import Login from './component/Login/Login';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from "./usercontext";
import Add from './component/Add/Add';
import About from './component/About/About';
import AboutCities from './component/AboutCities/aboutcities';

function App() {
  const { user } = useContext(UserContext);

  // Use state to manage the value of x
  const [x, setX] = useState(0);

  // Use effect to trigger the alert and update x to 1
  useEffect(() => {
    if (x === 0) {
      alert("this app is build ussing react,intgrated with firebase for storing pic and info about the cities so Have fun ...");
      setX(1);
    }
  }, [x]);

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar /><Tour /></>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/add' element={ user ?<Add/>:<><Navbar /><Tour /></>}/>
          <Route path='About' element={<><About/></>}/>
          <Route path='/more/:id' element={<><Navbar /><AboutCities /></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
