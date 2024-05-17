import { useState } from 'react';
import './App.css'
import Navbar from './component/Navbar';
import Testform from './component/Testform';
// import About from './component/About
import Alert from './component/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";





 function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("");

  const showAlert = (message,type)=>{
        setAlert({
           msg:message,
           type:type
        })
        setTimeout(() =>{
            setAlert(null);
        },2000)
  }
   const togglemode = ()=>{
          if(mode==='light'){
            setMode('dark')
            document.body.style.backgroundColor='grey';
            showAlert("dark mode has been enable!!!", "sucess");
            document.title = "Tectutil-dark";
          }
          else{
            setMode('light')
            document.body.style.backgroundColor='white';
            showAlert("light mode has been enablw!!!", "sucess");
            document.title = "Tectutil-light";
          }

   }
  return (
    <>
     {/* <Router> */}
      <Navbar mode={mode} togglemode={togglemode}/>
      {/* <Alert alert={alert}/> */}
      <div className="container my-5">
      {/* <Switch> */}
          {/* <Route path="/about">
         <About />
          </Route> */}
     
          {/* <Route path="/">
        {<Testform  showAlert={showAlert} title="write here" mode={mode}/> }
          
          </Route> */}
        {/* </Switch> */}
       < Testform  showAlert={showAlert} title="write here" mode={mode}/>
         {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App;
