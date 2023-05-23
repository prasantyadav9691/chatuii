import { useState } from "react";
import "./Join.css";

import { useNavigate } from "react-router-dom";

   

     let user;
     const Join = () => {

    const[text,setText]=useState('')
    const navigate=useNavigate()
    const [error,setError]=useState(false)

    const handleChat=()=>{ 
     if(text.length==0){
     setError(true)
 }
if(text){
   navigate('/main')
}
 
    }


   const handleUser=()=>{
   user=document.getElementById("textInput").value
   document.getElementById("textInput").value=""; 
}


    return(
<>

    
     

<div item container className="mainContainer">
  <div  className="container1" >
    <div className="img">
    <img src="images/chat4.png" width={100} height={50}/>
    </div>
  
  <div className="h1">
  <h1> Chat Application </h1>
  </div>
   
  
          <div className="inputc">
          <label >Enter your Name</label> 
          <input type="text" placeholder="Please Enter Name"  className="input" onChange={(event)=>setText(event.target.value)} id="textInput" />
           {error&& text.length<=0?
            <p> Error please  fill  the textbox</p>
            :""}
          </div>
        
     <div  className="btn1">
      
     <button class="login" onClick={handleChat}>Login</button>
 
  </div>
  </div>
  </div>

  </>

    )
 }


     
   
    
export default Join
export {user}
