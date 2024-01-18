import { useEffect } from 'react'
import './Card.css'
import axios from 'axios'
import { useState } from 'react';

export default function Card(){
const[data, setData] = useState({
    name : '',
    repos_url: '',
    created_at:''
});
let username = 'Singh01Shruti';
useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
             setData(response.data);

        })
        .catch(e => {
            console.error('Error fetching data:', e);
        })
      
    }, [username]);

    return (
        <>
        <div>{data.name}</div>
        <div>{data.repos_url}</div>
        <div>{data.created_at}</div>
        </>
    )
}