import React from 'react';
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import {BrowserRouter as Route} from 'react-router-dom';
import './App.css';

import RegisterForm from './components/Register';

function App() {
  return (
    <div className="App">
      <Profile />
      <RegisterForm />
      <Route exact path="/" component={Profile}/>
      <Route path="/editprofile" component={EditProfile}/>
      
    </div>
  );
}

export default App;
