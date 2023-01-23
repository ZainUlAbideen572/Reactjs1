import React, { useEffect, useState } from "react";
import axios from "axios";
function Credentials(){
    const[users,setUsers]=useState()
    useEffect(()=>{
        axios.get('https://api.github.com/users')
            .then(response=>setUsers(response.data))
            })
  return<div>
    {users.map(Credentials=><div>
        <h1>{Credentials.login}</h1>
        </div>)}
  </div>
}
export default Credentials;
