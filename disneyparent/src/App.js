import React from 'react';
import Profile from "./Profile"
import EditProfile from "./EditProfile"
import AcceptedCards from "./AcceptedCards"
import RequestCards from "./RequestCards"
import { Home } from "./Home";
import { About } from "./About";
import { Route } from 'react-router-dom'
import './App.css';

import RegisterForm from './components/Register';
import LoginForm from './components/Login';
import VBORegisterForm from './components/VBORegister';
import VBOLoginForm from './components/VBOLogin';

function App() {
  return (
    <div className="App">
      <Route path="/home" component= {Home}/>
      <Route path="/ourstory" component={About} />
      <Route path="/logout" component={LoginForm} />
      <Route
        path="/profile"
        render={() => <Profile />} />
      <Route
        path="/editprofile"
        render={() => <EditProfile />} />
      <Route
        path="/acceptedrequests"
        render={() => <AcceptedCards />} />
      <Route
        path="/availablerequests"
        render={() => <RequestCards />} />

      <Route exact
        path="/register"
        render={props => <RegisterForm {...props} />} />
      <Route exact
        path="/login"
        render={props => <LoginForm {...props} />} />
        <Route exact 
        path="/vbo-register" 
        render={props => <VBORegisterForm {...props} />}
        />
      <Route exact
        path="/vbo-login"
        render={props => <VBOLoginForm {...props} />}
      />
    </div>
  );
}

export default App;
