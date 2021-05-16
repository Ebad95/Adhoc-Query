import React from 'react'
import Axios from 'axios';
import { JsonToTable } from "react-json-to-table";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
export const Result = (props) => {
    const [sql, setSql] = React.useState("");
    const [col,setColumns]=React.useState("")
    const [result,setResult]=React.useState("")

    const Handler = (e) => {
   
        Axios({
            method: 'get',
            url: '/result',
            headers:{Authorization: `Bearer ${window.localStorage.getItem('key')}`}
        }).then((response) => {
            console.log(response.data);
            setSql(response.data);
            setColumns(response.data.columns)
            setResult(response.data.result)
        }, (error) => {
            console.log(error);
        });
        e.preventDefault();
    }
    const clearHandler = (e) => {
        const a=props.tokens
            Axios({
                method: 'get',
                url: '/clear',
                headers:{Authorization: `Bearer ${window.localStorage.getItem('key')}`}
            }).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
            e.preventDefault();
        }

    return (
        <div>
            <h1 className="hm" class="p-3 mb-2 bg-info text-white">RESULT</h1><hr />
            <div class="container-md">
                <form onSubmit={Handler}>
                    <button type="submit" class="btn btn-success">Generate Result</button>
                </form>
                <JsonToTable json={sql} />
        
            </div>
            <h1 className="hm" class="p-3 mb-2 bg-info text-white"></h1><hr />
            <button onClick={clearHandler} class="btn btn-success">Clear</button>
        </div>
    )
}