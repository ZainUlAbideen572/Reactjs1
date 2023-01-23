import React from "react";
import { useState } from "react";
function Home(){
        const[name,setname]=useState('hub')
        function change(){
            setname('telugu skillhub')
        }
    return<div>
       <h1>name:{name}</h1>
        <button onClick={change}>Click here</button>
    </div>
}
export default Home;