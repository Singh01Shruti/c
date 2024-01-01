import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let globalId = 1;
let todoState = [];
let oldTodoState = [];

function markAsDone(todoId) {
  const parent = document.getElementById(todoId);
  for(let old of oldTodoState){
    if(old.id === todoId && old.completed){
        parent.children[2].innerHTML = "Done!"
        break;
    }
  }
  
}

function createChild(title, description, id) {
  const child = document.createElement("div");
  const firstGrandParent = document.createElement("div");
  firstGrandParent.innerHTML = title;
  const secondGrandParent = document.createElement("div");
  secondGrandParent.innerHTML = description;
  const thirdGrandParent = document.createElement("button");
  thirdGrandParent.innerHTML = "Mark as done";
  thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
  child.appendChild(firstGrandParent);
  child.appendChild(secondGrandParent);
  child.appendChild(thirdGrandParent)
  child.setAttribute("id", id);
  return child;
}

function removeTodo(todo) {
  const element = document.getElementById(todo.id);
  const parent = document.getElementById("todos");
  if(element) parent.removeChild(element);
}

function updateTodo(oldTodo, newTodo) {
  const element = document.getElementById(oldTodo.id);
  if(element) {
  element.children[0].innerHTML = newTodo.title;
  element.children[1].innerHTML = newTodo.description;
  element.children[2].innerHTML = newTodo.completed ? "Mark as done" : "Done";
  }
}

function updateState(newTodos) {
  // calculate the diff b/w newTodos and oldTodos.
  // More specifically, find out what todos are - 
  // 1. added
  // 2. deleted
  // 3. updated
 
  const added = newTodos.filter(newTodo => !oldTodoState.find(oldTodo => oldTodo.id === newTodo.id));
  const deleted = oldTodoState.filter(oldTodo => !newTodos.find(newTodo => newTodo.id === oldTodo.id));
  const updated = newTodos.filter(newTodo => {
    const oldTodo = oldTodoState.find(oldTodo => oldTodo.id === newTodo.id);
    return oldTodo && (oldTodo.title != newTodo.title || oldTodo.description != newTodo.description)
  });
    
 added.forEach(todo => {
    const parent = document.getElementById("todos");
    parent.appendChild(createChild(todo.title, todo.description, todo.id));
 })


deleted.forEach(todo => {
    removeTodo(todo);
});

updated.forEach(todo => {
    const oldTodo = oldTodoState.find(t => t.id === todo.id);
    updateTodo(oldTodo,todo);
});

console.log("Added :");
console.log(added);
console.log("Deleted :");
console.log(deleted);
console.log("Updated :");
console.log(updated);
// calculate these 3 arrays
// call addTodo, removeTodo, updateTodo functions on each of the
// elements
  oldTodoState = newTodos;
}

function MyButton(){
  async function handleClick(){
  const response = await fetch("https://sum-server.100xdevs.com/todos");
  const result = await response.json();
  todoState = result.todos ;
  updateState(todoState);
  }
  return (
    <button onClick={handleClick}>
      Add Todo
    </button>
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
