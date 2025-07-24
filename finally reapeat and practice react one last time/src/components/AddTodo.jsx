import { useState } from "react"
import { addTodo } from "../app/features/todos/todoSlice"
import { useDispatch } from "react-redux"
import showNotification from "../utils/showNotification";

function AddTodo() {
      const [todo , setTodo] = useState('');
      const dispatch = useDispatch();

      const handleTodoSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo('')
        showNotification("task add here and also added to " , "success")
        showNotification("task add here and also added to " , "info")
        showNotification("task add here and also added to " , "warning")
        showNotification("task add here and also added to " , "error")
      }
      
  return (
    <form className="space-x-3 mt-12" onSubmit={handleTodoSubmit}>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
       
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo