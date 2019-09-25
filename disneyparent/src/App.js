import React from 'react';
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import { Route } from 'react-router-dom';
import './App.css';

import RegisterForm from './components/Register';
import LoginForm from './components/Login';

function App() {
  return (
    <div className="App">
      <Route exact
        path="/"
        render={props => <Profile {...props} />}
      />
      <Route exact
        path="/editprofile"
        render={props => <EditProfile {...props} />} />

      <Route exact 
      path="/register" 
      render={props => <RegisterForm {...props} />} />
      <Route exact 
      path="/login" 
      render={props => <LoginForm {...props} />} />
    </div>
  );
}

export default App;
