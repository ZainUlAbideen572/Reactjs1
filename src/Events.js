import React ,{useState} from "react";
function Events(){
    const[count,setcount]=useState(1000)
    function inc(){
        setcount(count+1)
    }
    function dec(){
        setcount(count-1)
    }
   return <div>
    <h1>count:{count}</h1>
    <button onClick={inc}>++</button>
    <button onClick={dec}>--</button>
   </div>
    
}
export default Events;