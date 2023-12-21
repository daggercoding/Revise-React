import style from "./App.module.css"
import Display from "./Components/Display"
import  Button  from "./Components/ButtonContainer"
import { useState } from "react"
function App() {
  let[display,setDisplay]=useState("")

  function handlerOnClick(symbol)
  {
    if(symbol==="C")
    {
      setDisplay("")
    }
    else if (symbol==="=")
    {
     const result = eval(display)
     setDisplay(result)
    }
    else{
      const newDisplayValue=display+symbol
      setDisplay(newDisplayValue)
    }
  }

  return (
    <div className={style.calculator}>
      <Display display={display}/>
      <Button handlerOnClick={handlerOnClick}/>
      
    </div>
  )
}

export default App
