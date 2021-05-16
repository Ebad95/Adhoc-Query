import React, { useState } from 'react'
import Axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { GenerateSql } from './GenerateSql';

export const OrderBy = (props) => {
    const order = ['ASC', 'DESC']
    const [ord, setOrder] = useState("")
    const [orderby, setOrderBy] = useState("")
    
    const handler = (e) => {
        Axios({
            method: 'post',
            url: '/order',
            headers:{Authorization: `Bearer ${window.localStorage.getItem('key')}`},
            data: {
                order_by: {
                    columns: [orderby.value],
                    order: [ord.value]
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
            <h1 className="hm" class="p-3 mb-2 bg-info text-white">Order By</h1><hr />
            <form onSubmit={handler}>
                <Dropdown options={props.columns}
                    onChange={setOrderBy}
                    placeholder="Select OrderBy Column" /><br></br>
                <Dropdown options={order}
                    onChange={setOrder}
                    placeholder="Select ascending or descending" /><br></br>
                <button type="submit" class="btn btn-success">Add OrderBy column</button><hr />
            </form>
            <GenerateSql />
        </div>
    )
}

