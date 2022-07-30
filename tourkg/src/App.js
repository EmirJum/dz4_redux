import './App.css';
import {useState} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Main from './components/Main';
import Counter from './components/Counter/Counter'


function App() {

  return (
  <div>
    <BrowserRouter>
      <nav  className='link'>
          <Link to='/' className='links'>Домой</Link>
          <Link to='/profile' className='links'>Профиль</Link>
          <Link to='/counter' className='links'>Счётчик(Redux)</Link>

      </nav>
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </BrowserRouter>
    
  </div>
  )
}

export default App;