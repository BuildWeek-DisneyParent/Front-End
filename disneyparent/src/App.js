import React from 'react';
import Profile from "./Profile"
import EditProfile from "./EditProfile"
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile />
      <Router exact path="/" component={Profile}/>
      <Router path="/editprofile" component={EditProfile}/>
    </div>
  );
}

export default App;
