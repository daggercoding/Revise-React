import { Todo } from "./Model"
import { MdOutlineDownloadDone ,MdDeleteSweep } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";

type Props=
{
    todo:Todo;
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({todo,todos,setTodos}:Props) => {

    const[done,setDone]=useState(false)

    function doneClickHander()
    {
        setDone(!done)
    }

    function deleteClickHandler(id:number)
    {
        setTodos(todos.filter((todo)=>todo.id!=id))
    }

  return (
<div className="todoContainer">
    <div>
        <li style={{textDecoration:done?"line-through":"none"}}>{todo.todo}</li>
    </div>
    <div className="todoIcon">
        <AiFillEdit />
        <MdDeleteSweep onClick={()=>{deleteClickHandler(todo.id)}}/>
        <MdOutlineDownloadDone onClick={doneClickHander} />
    </div>

</div>
  )
}

export default SingleTodo
