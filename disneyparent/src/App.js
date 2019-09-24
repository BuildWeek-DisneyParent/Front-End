import React from 'react';
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import {BrowserRouter as Route} from 'react-router-dom';
import './App.css';

import RegisterForm from './components/Register';
import LoginForm from './components/Login';

function App() {
  return (
    <div className="App">
      <Profile />
      <Route exact path="/" component={Profile}/>
      <Route path="/editprofile" component={EditProfile}/>
      <RegisterForm />
      <LoginForm />

      
    </div>
  );
}

export default App;
