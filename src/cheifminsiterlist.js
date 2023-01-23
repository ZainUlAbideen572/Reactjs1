import React from "react";
function Chiefministerlist({CM}){
  
  return<div>
    <h1>South indian cms</h1>
            <div class="card">
  <img src={CM.image} class="card-img-top"/>
  <div class="card-body">
    <h2>chiefminister:{CM.name}</h2>
    <h2 class="card-text">state:{CM.state}</h2>
    <hr/>
  </div>
</div>
    </div>
}
export default Chiefministerlist;