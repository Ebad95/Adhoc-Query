import React, { useState } from 'react'
import Axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Having } from './Having';

export const GroupBy = (props) => {
    const [grpby, setGroupBy] = useState("");
    
    const handler = (e) => {
        console.log(grpby.value)
        Axios({
            method: 'post',
            url: '/groupby',
            headers:{Authorization: `Bearer ${window.localStorage.getItem('key')}`},
            data: {
                column: grpby.value
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
            <h1 className="hm" class="p-3 mb-2 bg-info text-white">Group By</h1><hr />
            <form onSubmit={handler}>
                <Dropdown options={props.columns}
                    onChange={setGroupBy}
                    placeholder="Select GroupBy Column" /><br></br>
                <button type="submit" class="btn btn-success">Add GroupBy column</button><hr />
            </form>
          <Having columns={props.columns} />
        </div>
    )
}