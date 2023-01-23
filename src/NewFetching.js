import React, { useState } from "react";
import axios from "axios";
function Adding(){
    const[id,setid]=useState()
    const[title,settitle]=useState()
    const[error,seterror]=useState(false)
    // const[data,setData]=useState([])
    const oncontrolchange=(evt)=>{
        setid({[evt.target.name]:evt.target.value})
        settitle({[evt.target.name]:evt.target.value})
    }
//    const  onSave=async()=>{
//         try{
//         await axios.post('https://jsonplaceholder.typicode.com/todos',id,title)
//           setid({id:""}),
//           settitle({title:""})
//     }
//     catch(error){
//         seterror(true)
//     }
        
//     }
    return<div className="container m-3">
        <div className="mb-3">
        <label for="id" class="form-label">id</label>
    <input value={id} name="id" type="text" class="form-control"  placeholder="id"  onChange={oncontrolchange}/>
    </div>
    <div className="mb-3">
    <label for="title" class="form-label">title</label>
    <input value={title} type="text" name="title"class="form-control"  placeholder="title"  onChange={oncontrolchange}/>
    </div>
    {/* <button className="btn btn-Success" onClick={onSave}>Submit</button> */}
    </div>
}
export default Adding;