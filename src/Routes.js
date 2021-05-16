import React from 'react';
import { Redirect } from 'react-router-dom';
import {Home} from './components/Home'
import {Login} from './user/Login'
import {Signup} from './user/Signup'
import {Profile} from './user/Profile'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Routes = () => {
  return (
    <Router>
          <div>
          <Route path="/" exact render={
            ()=>{
                return ( <Login /> )
            }
        }/>
        <Route path="/signup" exact render={
            ()=>{
                return ( <Signup /> )
            }
        }/>
        <Route path="/home" exact render={
            ()=>{
                return ( <Home /> )
            }
        }/>
        <Route path="/profile" exact render={
            ()=>{
                return ( <Profile /> )
            }
        }/>
        </div>
        </Router>
  );
};

export default Routes;