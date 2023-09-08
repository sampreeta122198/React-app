import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleclick = ()=>
    {
      if(mode==='light')
        {
          setMode('dark');
          document.body.style.backgroundColor='#023245';
          showAlert("Dark mode enabled","success")
          document.title= "TextUtils - DarkMode"
        }
      else
        {
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light mode enabled","success")
          document.title= "TextUtils - LightMode"
        }
    }
  

  return (
   
    <>
     {/* <Router> */}
      <Navbar title="TextUtils" menu2="ABout New" mode={mode} toggleclick={toggleclick}/>
      <Alert alert={alert}/>
                
  
              
              <div className="container my-3">
              {/* <Routes> */}
                  {/* <Route path="/about" element={<About />}>
                  
                  </Route> */}
                  {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
                    
                  </Route> */}
              {/* </Routes> */}
                {/* <About></About> */}
                <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
              </div>

              {/* <Navbar /> */}
            {/* </Router> */}
    </>
      
  );
}

export default App;
