import { useDispatch } from "react-redux";

function Button()
{
  let dispaatcher=useDispatch()
   
    function inc()
    {
        dispaatcher({type:"increment"})
    }

    function dec()
    {
        dispaatcher({type:"decrement"})

    }

    return(
        <div className="buttonContainer">
        <button onClick={inc} style={{margin:"1px"}}>increment</button>
        <button onClick={dec} >decrement</button>
        </div>
    )
}
export default Button;