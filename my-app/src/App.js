import React from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';




function App() {
  
  return (
    <>
    <Navbar title = "Text Utilss" aboutText="About" />
    {/* <Navbar /> */}
    <TextForms />
    </> 
  )
}

export default App;
