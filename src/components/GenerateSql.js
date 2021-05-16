import React from 'react'
import Axios from 'axios';
import { Result } from './Result'

export const GenerateSql = (props) => {
  const [sql, setSql] = React.useState("");
  const Handler = (e) => {
    Axios({
      method: 'get',
      url: '/generate_sql',
      headers:{Authorization: `Bearer ${window.localStorage.getItem('key')}`},
    }).then((response) => {
      console.log(response.data.SQL);
      setSql(response.data.SQL);
    }, (error) => {
      console.log(error);
    });
    e.preventDefault();
  }

  return (
    <div>
      <h1 className="hm" class="p-3 mb-2 bg-info text-white">Generate SQL</h1><hr />
    <div class="container-md">
      <form onSubmit={Handler}>
        <button type="submit" class="btn btn-success">Generate Sql</button>
      </form>
      <div className="sql">{sql ? <p>{sql}</p> : null}</div>
    </div>
    <Result />
    </div>
  )
}