import React, { useEffect, useState } from 'react'

import { Tables } from "./Tables"
import { Columns } from "./Columns"
import Axios from 'axios';
import { Login } from '../Login'
import '../index.css'
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'

export const Home = () => {
  const [tables, getTables] = useState([]);
  const [lcheck, setLogoutCheck] = useState([]);
  const history=useHistory()
  /* useEffect(() => { */
  const gettablehandler = (e) => {
    Axios({
      method: 'get',
      url: '/get_tables',
      headers: { Authorization: `Bearer ${window.localStorage.getItem('key')}` }
    }).then(response => {
      getTables(response.data.tables);
    })
    e.preventDefault();
  }
  /*}, []);*/

  const handler = (e) => {
    setLogoutCheck(true)
    Axios({
      method: 'post',
      url: '/logout',
      headers: { Authorization: `Bearer ${window.localStorage.getItem('key')}` }
    }).then((response) => {
      console.log(response);
      history.replace('/')
    }, (error) => {
      console.log(error);
    });
    e.preventDefault()
  }

  console.log(tables)
 

  return (
    <div className="App" class="container-sm">
      <header className="header">
      <h1 className="hm" class="p-3 mb-2 bg-info text-white">Ad hoc Query Builder </h1><hr />
        <button class="logout" onClick={handler}>logout</button>
        <Link to='/profile'><button class="profile">profile</button></Link>
      </header>
      <div>
        <button class="gettable" onClick={gettablehandler}>Get Tables</button><hr />
        <Tables tables={tables} />
        <Columns />
      </div>
    </div>
  );
}

