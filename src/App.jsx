import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import DuAn from './components/pages/DuAn.jsx';
import Contact from './components/pages/Contact';
import TinTuc from './components/pages/TinTuc.jsx';
import ThietBiSanXuat from './components/pages/Products.jsx';
import JobDetail from "./components/pages/JobDetail.jsx";
import Projects from "./components/pages/Products.jsx";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Homepage />}/>
        {/* <Route path = "/products" element = {<Projects/>}/> */}
        {/* <Route path="/quytrinhtuyendung" element ={<QuyTrinhTuyenDung />}/> */}
        <Route path="/DuAn" element ={<DuAn />}/>
        <Route path="/TinTuc" element ={<TinTuc />}/>
        <Route path="/ThietBiSanXuat" element ={<ThietBiSanXuat />}/>
        <Route path="/lienhe" element ={<Contact />}/>
        {/* <Route path="/chitietcongviec/:id" element ={<JobDetail />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
