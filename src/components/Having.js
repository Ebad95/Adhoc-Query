import React, { useState } from 'react'
import Axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { OrderBy } from './OrderBy'

export const Having = (props) => {
    const aggregate = ['SUM', 'COUNT', 'AVG']
    const op = ['>', '<', '<=', '>=', '<>', '=']
    
    const [val, setVal] = useState("");
    const [colr, setColr] = useState("");
    const [agg, setAgg] = useState("");
    const [col, setCol] = useState("");

    const [Agg, setAggregate] = useState("");
    const [Col, setColumn] = useState("");

    const handler = (e) => {
        setVal(e.target.value)
    }

    const Handler = e => {
        Axios({
          method: 'post',
          url: '/having',
          headers:{Authorization: `Bearer ${window.localStorage.getItem('key')}`},
          data: {
              having:{
                function: agg.value,
                column: col.value,
                condition: colr.value,
                value: val
              }
          }
        }).then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        e.preventDefault();
      }
    return (
        <div>
        <div>
            <h1 className="hm" class="p-3 mb-2 bg-info text-white">Having</h1><hr />
            <form onSubmit={Handler}>
                <Dropdown options={props.columns}
                    onChange={setCol}
                    placeholder="Select Column for applying aggregate" /><br></br>
                <Dropdown options={aggregate}
                    onChange={setAgg}
                    placeholder="Select an aggregate function" /><br></br>
                <Dropdown options={op}
                    onChange={setColr}
                    placeholder="Select a relational operator" /><br></br>
                <label>Enter the value: </label>
                <input type="value" onChange={handler}></input><hr />
                <button type="submit" class="btn btn-success">Submit Having Conditions</button><hr />
            </form>
        </div>
        <OrderBy columns={props.columns} />
        </div>
    )
}
