import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Shouldrender from "./Common/Shouldrender";
import Error from "./Common/Error";
function Fetching(){
    const[data,setData]=useState([])
    const[error,seterror]=useState(false)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res=>setData(res.data),seterror(false))
        .catch(error=>seterror(true))
    },[])
    return<div>
        {data.map(Users=><div>
            <h1>{Users.id}</h1>
            <h2>{Users.title}</h2>
         {error?seterror(<div className="alert alert-danger m-3">Something went wrong</div>):null}
                   </div>)}
    </div>
}
export default Fetching;