
import React from "react";
class Test extends React.Component {
  state = {
    Amounttosend:"",
    Amountreceived:"",
    senderName:"",
    ReceiverName:"",
   
    
  };
  oncontrolchange=(evt)=>{
    this.setState({[evt.target.name]:evt.target.value})
  }
  
  onsave=()=>{
          console.log(this.state)
  }
 

 
  render() {
    const{Amounttosend,Amountreceived,SenderName,ReceiverName}=this.state
    return <div className="container m-3">
      <form>
          <div class="mb-3">
         <label for="Amounttosend" class="form-label">Amounttosend</label>
          <input value={Amounttosend} name="Amounttosend"type="text" class="form-control" id="Amounttosend" placeholder="Amounttosend" onChange={this.oncontrolchange}/>
          {/* {!Amounttosend?<span>
           <span className="text-danger">Amount requiredd</span>
          </span>:null} */}
        </div>
        <div class="mb-3">
          <label for="Amountreceived" class="form-label">Amountreceived</label>
          <input value={Amountreceived}  name="Amountreceived" type="text" class="form-control" id="Amountreceived" placeholder="Amountreceived" onChange={this.oncontrolchange}/>
          {/* {!Amountreceived?<span>
           <span className="text-danger">model requiredd</span>
          </span>:null} */}
        </div>
       
        
     <div class="mb-3">
          <label for="SenderName" class="form-label">SenderName</label>
          <input value={SenderName} name="SenderName" type="text" class="form-control" id="SenderName" placeholder="SenderName" onChange={this.oncontrolchange}/>
          {/* {!senderName?<span>
           <span className="text-danger">Name  requiredd</span>
          </span>:null} */}
        </div>
        <div class="mb-3">
          <label for="ReceiverName" class="form-label">ReceiverName</label>
          <input value={ReceiverName} name="ReceiverName" type="text" class="form-control" id="ReceiverName" placeholder="ReceiverName" onChange={this.oncontrolchange}/>
          {/* {!ReceiverName?<span>
           <span className="text-danger">Name  requiredd</span>
          </span>:null} */}
        </div>

      </form>
      <button className="btn btn-success" onClick={this.onsave }>save
      <i className="fa fa-save"></i>
      </button>
    </div>
  }
}
export default Test;