import { Todo } from "./Model"
import SingleTodo from "./SingleTodo"
type Props=
{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist = ({todos,setTodos}:Props) => {

  return (
    <div >
    {todos.map((todo)=>{
        return(
             <SingleTodo key={todo.id}  todo={todo} setTodos={setTodos} todos={todos}></SingleTodo>
        )
    })}
    </div>
  )
}

export default Todolist
