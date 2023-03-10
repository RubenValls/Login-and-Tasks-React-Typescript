import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import HomeComponent from './components/home/homeComponent';
import LoginPageComponent from './components/login/loginPageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element = {<LoginPageComponent/>}></Route>
          <Route path='/home' element = {<HomeComponent/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
