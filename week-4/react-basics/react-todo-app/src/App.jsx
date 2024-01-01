import { useState } from 'react'
import './App.css'

function MyButton(){
  const [todos, setTodos] = useState([]);
  async function handleClick(){
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const result = await response.json();
    setTodos(result.todos);
    }
  return (
    <>
    <button onClick={handleClick}>
      Add Todo
    </button>
    <div>
      {todos.map(todo => (
        <div key = {todo.id}>
          <div>{todo.title}</div>
          <div>{todo.description}</div>
        </div>
      ))}
    </div>
    </>
  )
}


function App() {
  
  return (
    <>
      <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
      <input type="text" id="description" placeholder="Todo description"></input> <br /><br />
      <MyButton />
      <br /> <br />
      <div id="todos"></div>
    </>
  )
}

export default App
