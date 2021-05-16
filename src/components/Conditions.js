import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { AggregateFunction } from './AggregateFunction';
import { GroupBy } from './GroupBy';

export const Conditions = (props) => {

    const [col, setCol] = useState("");
    const [colr, setColr] = useState("");
    const [val, setVal] = useState("");
    const [acc, setAcc] = useState("");
    

    const op = ['>', '<', '<=', '>=', '<>', '=']
    const acceptance = ['all', 'any', 'not all', 'none']


    const [cond, setConditions] = useState([]);
    const [check, setCheck] = useState(false);

    const handler = (e) => {
        setVal(e.target.value)
    }

    const Handler = (e) => {
        setCheck(true);
        Axios({
            method: 'post',
            url: '/conditions',
            headers:{Authorization: `Bearer ${window.localStorage.getItem('key')}`},
            data: {
                where: {
                    conditions: cond,
                    acceptance: acc.value
                }
            }
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
        e.preventDefault();
    }

    console.log(col.value)
    console.log(colr.value)
    console.log(val);
    console.log(cond);


    return (
        <div>
            <div>
            <h1 className="hm" class="p-3 mb-2 bg-info text-white">Where Clause Conditions</h1><hr />
                <form onSubmit={Handler}>
                    <Dropdown options={props.columns}
                        onChange={setCol}
                        placeholder="Select Column for applying condition" /><br></br>
                    <Dropdown options={op}
                        onChange={setColr}
                        placeholder="Select a relational operator" /><br></br>
                    <label>Enter the value: </label>
                    <input type="value" onChange={handler}></input><hr />
                    <button class="btn btn-success" onClick={(event) => { setConditions(oldArray => [...oldArray, col.value + " " + colr.value + " " + val]) }}>Add Condition+</button><hr />
                    <Dropdown options={acceptance}
                        onChange={setAcc}
                        placeholder="Select" /><br></br>
                    <button type="submit" class="btn btn-success">Submit Conditions</button><br></br>
                </form>
            </div><hr />
            <AggregateFunction columns={props.columns} />
        </div>
    )
}