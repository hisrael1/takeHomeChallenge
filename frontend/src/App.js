// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Posts from './components/post/Posts';
import Coffees from './components/coffee/Coffees';

function App() {
  return (
    <div className="App">
      <Posts />
      <Coffees />
    </div>
  );
}

export default App;
