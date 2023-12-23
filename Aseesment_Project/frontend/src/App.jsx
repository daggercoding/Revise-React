import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from './Components/Card'
import Header from './Components/Header'
import CreateCard from './Components/CreateCard'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/create" element={<CreateCard />} />
        </Routes>
      </>
    </BrowserRouter>
    </>
  )
}

export default App
