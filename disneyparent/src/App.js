import React from 'react';
import Profile from "./Profile"
import EditProfile from "./EditProfile"
import AcceptedCards from "./AcceptedCards"
import RequestCards from "./RequestCards"
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route
        path="/profile"
        render={() => <Profile />}/>
        <Route
        path="/editprofile"
        render={() => <EditProfile />}/>
        <Route
        path="/acceptedrequests"
        render={() => <AcceptedCards />}/>
        <Route
        path="/availablerequests"
        render={() => <RequestCards />}/>
    </div>
  );
}

export default App;
