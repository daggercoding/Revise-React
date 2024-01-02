import { useState } from "react"
import "./App.css"
import Header from "./Components/Header"
import InputForm from "./Components/InputForm"
import { Todo } from "./Components/Model"
import Todolist from "./Components/Todolist"
function App() 
{
  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<Todo[]>([])


  function submitHandler(e:React.FormEvent)
  {
    e.preventDefault()
    if(todo)
    {
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("")
    }
  }
  return (
    <>
      <div className="Container">
        <Header/>
        <InputForm todo={todo} setTodo={setTodo} submitHandler={submitHandler} />
        <Todolist todos={todos} setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
