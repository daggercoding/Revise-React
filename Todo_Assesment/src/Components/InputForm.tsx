import { useRef } from "react";

type InputForm={
    todo:string
    setTodo:React.Dispatch<React.SetStateAction<string>>
    submitHandler:(e:React.FormEvent)=>void;
}

const InputForm = ({todo,setTodo,submitHandler}:InputForm) => {
    const inputRef=useRef<HTMLInputElement>(null)
  return (
 
      <form className="input" onSubmit={(e)=>{
        submitHandler(e);
        inputRef.current?.blur()}}>
        <input className="inputBox" type="text" placeholder="Enter yout Todo"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}></input>
        <button className="inputButton" type="submit">Go</button>
      </form>

  )
}

export default InputForm
