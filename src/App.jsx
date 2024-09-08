import { useState,useEffect } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import { Nav } from './Components/Nav'
import { TodoList } from './Components/TodoList';
function App() {
  const [todos ,setTodos]=useState([]);
  const [showDone,setShowDone]=useState(false);
  useEffect(() => {
    console.log(todos);
  
  }, [todos])
  
  return (
    <div className='py-3 bg-slate-400'>
    <div className='container bg-blue-300 rounded-lg mx-auto'>
      <Nav></Nav>
      <AddTodo todos={todos} setTodos={setTodos}></AddTodo>
      <button onClick={()=>setShowDone(!showDone)} className='bg-blue-400 text-2xl m-3 p-2 rounded-lg'>Show Done</button>
      <TodoList showDone={showDone} todos={todos} setTodos={setTodos}></TodoList>
    </div>
    </div>
  )
}

export default App
