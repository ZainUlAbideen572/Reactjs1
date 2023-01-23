import React from "react";
function Cricketerslist({Cricket}){
    return <div>
        <h1>{Cricket.name}</h1>
        <img src ={Cricket.img} width="300" height="300"/>

    </div>
        
}
export default Cricketerslist;