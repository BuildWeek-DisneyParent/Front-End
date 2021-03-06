import React from 'react';
import Profile from "./Profile"
import EditProfile from "./EditProfile"
import RequestCards from "./RequestCards"
import { Home } from "./Home";
import { About } from "./About";
import { Route } from 'react-router-dom'
import './App.css';
import Posts from './components/Posts';
import RegisterForm from './components/Register';
import LoginForm from './components/Login';
import VBORegisterForm from './components/VBORegister';
import VBOLoginForm from './components/VBOLogin';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component= {Home}/>
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
        render={() => <RequestCards />} />
      <Route
        path="/availablerequests"
        render={() => <Posts />} />

      <Route 
        path="/register"
        render={props => <RegisterForm {...props} />} />
      <Route 
        path="/login"
        render={props => <LoginForm {...props} />} />
        <Route  
        path="/vbo-register" 
        render={props => <VBORegisterForm {...props} />}
        />
      <Route 
        path="/vbo-login"
        render={props => <VBOLoginForm {...props} />}
      />
      <Route 
        path="/posts"
        render={props => <Posts {...props} />}
      />
    </div>
  );
}

export default App;
