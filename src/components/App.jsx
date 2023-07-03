import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <BrowserRouter>
        <Route exact path="/feedback/1">
          <h2>How are you feeling today?</h2>
        </Route> 
        <Route exact path="/feedback/2">
          <h2>How well are you understanding the content?</h2>
        </Route> 
        <Route exact path="/feedback/3">
          <h2>How well are you being supported?</h2>
        </Route> 
        <Route exact path="/feedback/4">
          <h2>Any comments you have?</h2>
        </Route> 
      </BrowserRouter>
    </div>
  );
}

export default App;
