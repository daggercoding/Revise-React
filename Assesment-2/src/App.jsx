import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/Login"
import Header from './Components/Header';
import Start from './Components/Start';
import { useState } from 'react';
function App() {
 
  let[count,setCount]=useState(0)
  let[login,setLogin]=useState(true)
  
return (
    <>
    
    <BrowserRouter>
      <>
        <Header count={count} login={login} setLogin={setLogin} setCount={setCount} />
        <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path="/home" element={<Home setCount={setCount}/>}/>
          <Route path="/create" element={<Login setLogin={setLogin} />}/>
        </Routes>
      </>
    </BrowserRouter>
    </>
  )
}

export default App
