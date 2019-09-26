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
      <Route exact path="/" component= {Home}/>
      <Route exact path="/ourstory" component={About} />
      <Route exact path="/logout" component={LoginForm} />
      <Route
        exact
        path="/profile"
        render={() => <Profile />} />
      <Route
        exact
        path="/editprofile"
        render={() => <EditProfile />} />
      <Route
        exact
        path="/acceptedrequests"
        render={() => <AcceptedCards />} />
      <Route
        exact
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
