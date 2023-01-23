import React from "react";
import Chiefministerlist from "./cheifminsiterlist";
function CM(){
    const data=[
        {id:1,name:'kcr',state:'Telangana',image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LAaXM5SpMxvkAyNIqpqiUPEtHRABJ8g9_g&usqp=CAU"},
        {id:2,name:'ysjagan',state:'Andhra pradesh',image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMqE-9AkCrOL93ZpTnlod3BsnCXSB5dMf_Q&usqp=CAU"},
        {id:3,name:'stalin',state:'Tamilnadu',image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkp_uR2fBnjDMH7l8GhfoBdRUhUSWff0kLQ&usqp=CAU"},
        {id:4,name:'pinaraivijayan',state:'Kerala',image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLrNwPYmzzF03Rc6iKuVvMBIW0QtNlx7umw&usqp=CAU"}
    ]
    return <div>
        {data.map(CM=><Chiefministerlist CM={CM}/>)}
            </div>
}
export default CM;