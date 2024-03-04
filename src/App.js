import React from 'react';
import './App.css';
import './Responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Project_comonents/Navbar';
import Footer from './Project_comonents/Footer';
import Home from './Project_comonents/Home';
import Main from './Project_comonents/Main';
import Registration from './Project_comonents/Registration';




function App(){
  return ( 
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Main' element={<Main/>}/>
            <Route path="/Registration" element={<Registration/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
   );
}

export default App;


