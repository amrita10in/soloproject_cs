import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import Signup from './containers/Signup.jsx';
import Login from './containers/Login.jsx';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/main" exact element ={<MainContainer />} />
        <Route path="/signup" exact element ={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;