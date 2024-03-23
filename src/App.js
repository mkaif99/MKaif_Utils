import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'MKaif Utils - Dark Mode'
      setInterval(() => {
        document.title = 'MKaif Utils is Amazing'
      }, 3000)
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      document.title = 'MKaif Utils - Light Mode'
      setInterval(() => {
        document.title = 'MKaif Utils is Amazing'
      }, 1500)
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="MkALI" mode={mode} togglemode={togglemode} />
      {/* by this navbar shown on the page */}
      <Alert alert={alert} />
      
        <div className="container my-3">
        <Textform heading="Enter the Text here" mode={mode} showAlert={showAlert} />
          {/* <Switch>
            <Route path="/about">
              <About />   {/* this is related with About.js }
            </Route>
            <Route path="/">
              <Textform heading="Enter the Text here" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  )
}
export default App;
