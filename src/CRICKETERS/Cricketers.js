import React from "react";
import Cricketerslist from "./Cricketerslist";
function Cricket(){
    const data=[
        {id:1,img:"https://www.mykhel.com/img/400x90/2022/12/resized-image-promo-2022-12-10t162506-325-1670669716.jpeg",name:'virat kohli'},
        {id:2,img:"https://images.hindustantimes.com/img/2022/07/06/1600x900/dhoni-2016-getty_1654515327472_1657137509048.jpg",name:"ms dhoni"}
    ]
    return<div>
        {data.map(Cricket=><Cricketerslist Cricket={Cricket}/>)}
    </div>
}
export default Cricket;