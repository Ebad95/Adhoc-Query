import React,{ useState } from 'react'
import { Redirect} from 'react-router-dom'
import Axios from 'axios'
import './index.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Home } from './components/Home'
import axios from 'axios';

export const Login=(props)=> {

  const history = useHistory();

    const [accessToken, setaccessToken] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [susername, setSignupUsername] = useState('')
    const [spassword, setSignupPassword] = useState('')
    const [check, setCheck] = useState(false)

    const onSubmitClick = (e)=>{
      console.log("You pressed login")
      let opts = {
        'username': username,
        'password': password
      }
      console.log(opts)
      Axios({
        method: 'post',
        url: '/login',
        data: opts
      }).then(response => {
        console.log(response)
        setCheck(true)
        setaccessToken(response.data.token)
    }).catch(error => {
        console.log(error);
        return;
    })
        e.preventDefault()
    }
    console.log(accessToken);

    const onSubmit = (e)=>{
      console.log("You pressed signup")
      let optss = {
        'username': susername,
        'password': spassword
      }
      console.log(optss)
      Axios({
        method: 'post',
        url: '/signup',
        data: optss
      }).then(response => {
        console.log(response)
    })
        e.preventDefault()
    }
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value)
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }
    const handleSignupUsernameChange = (e) => {
      setSignupUsername(e.target.value)
    }
  
    const handleSignupPasswordChange = (e) => {
      setSignupPassword(e.target.value)
    }

    if(check == true) {
       return (
         <Home tokens={accessToken} />
       )
    }
  
    return (
      <div>
      <div class="signup-form">
    <form onSubmit={onSubmit}>
        <h2 class="text-center">Signup</h2>       
        <div class="form-group">
            <input type="text" onChange={handleSignupUsernameChange} class="form-control" placeholder="Username" required="required"></input>
        </div><br></br>
        <div class="form-group">
            <input type="password" onChange={handleSignupPasswordChange} class="form-control" placeholder="Password" required="required"></input>
        </div><br></br>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Signup</button>
        </div>       
    </form>
</div>
      <div class="login-form">
    <form onSubmit={onSubmitClick}>
        <h2 class="text-center">Log in</h2>       
        <div class="form-group">
            <input type="text" onChange={handleUsernameChange} class="form-control" placeholder="Username" required="required"></input>
        </div><br></br>
        <div class="form-group">
            <input type="password" onChange={handlePasswordChange} class="form-control" placeholder="Password" required="required"></input>
        </div><br></br>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="float-left form-check-label"><input type="checkbox" /> Remember me</label>
        </div>        
    </form>
</div>
</div>
    )
  }
