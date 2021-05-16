import React, { useState } from 'react'
import Axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { GroupBy } from './GroupBy';

export const AggregateFunction = (props) => {
    const aggregate = ['SUM', 'COUNT', 'AVG', 'MAX', 'MIN']
    const [agg, setAgg] = useState("");
    const [col, setCol] = useState("");
    
    const [Agg, setAggregate] = useState([]);
    const [Col, setColumn] = useState([]);

    const Handler = (e) => {
        Axios({
            method: 'post',
            url: '/aggregate_function',
            headers:{Authorization: `Bearer ${window.localStorage.getItem('key')}`},
            data: {
                aggregate: {
                    columns: Col,
                    functions: Agg
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
                <h1 className="hm" class="p-3 mb-2 bg-info text-white">Aggregate Functions</h1><hr />
                <form onSubmit={Handler}>
                    <Dropdown options={props.columns}
                        onChange={setCol}
                        placeholder="Select Column for applying aggregate" /><br></br>
                    <Dropdown options={aggregate}
                        onChange={setAgg}
                        placeholder="Select an aggregate function" /><br></br>
                    <button class="btn btn-success" onClick={(event) => { setAggregate(oldArray => [...oldArray, agg.value]); setColumn(oldArray => [...oldArray, col.value]) }}>Add AggregateFunction+</button><hr />
                    <button type="submit" class="btn btn-success">Submit Aggregate Functions</button><hr />
                </form>
            </div>
            <GroupBy columns={props.columns} />
        </div>
    )
}
