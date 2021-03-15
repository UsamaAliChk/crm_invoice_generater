import React,{useLayoutEffect} from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { setCompanies} from '../redux/action/index'
export default function Data(props) {
    const dispatch=useDispatch();
    useLayoutEffect(async()=>{
        const data= await axios
      .get("http://localhost:5000/companies")
      .then(res => {console.log(res.data); return res.data})
      .catch(err => console.error(err));
      dispatch(setCompanies(data))
    })
    return (
        <div>
            {props.children}
        </div>
    )
}
