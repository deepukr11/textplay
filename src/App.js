import About from "./coponents/About";
import Alert from "./coponents/Alert";
import Navbar from "./coponents/Navbar";
import TextForm from "./coponents/TextForm";
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route                          // this is for react router
} from "react-router-dom";

function App() {

  const [mode , setMode]=  useState(`light`);

  const enabledarkMode=()=>{
    if(mode===`light`){
      setMode(`dark`);
      document.body.style.backgroundColor=`#343a40`;
      alertfunction("Dark mode is enabled","success");
    }
    else{
      setMode(`light`);
      document.body.style.backgroundColor=`white`;
      alertfunction("Light mode is enabled","success");
    }
  }

  const [alert , setAlert]=  useState(null);

  const alertfunction = ( massega, type)=>{
       setAlert({
        msg: massega,
        tp : type 
       })
      setTimeout(()=>{
         setAlert(null);
      },1500)
  }



  return (
   <>
   <Router>
   
   <Navbar title="HASH INDIA"
           Home="Home"
           Link="Link"
           About="About"
           Search="Search" 
           mode={mode} 
           enabledarkMode={enabledarkMode}
    />
 <Alert alert={alert}/>

       <Switch>
            <Route exact path="/About">
              <div className="container"><About mode={mode}/></div>
            </Route>
            <Route exact path="/">
              <div className="container">
              <TextForm  hading="Change in upper/lower case" alertfunction={alertfunction} mode={mode}/>
              </div>
            </Route>
     </Switch>
  </Router>
</>



   




      
   
   
   
   
  
  );
}

export default App;
