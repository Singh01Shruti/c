/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/


class Todo {
  constructor() {
    this.list = [];
  }

 add(todo){
  this.list.push(todo);
  //new added
  return this.list;
 }

 remove(indexOfTodo){
  if(indexOfTodo >= 0 && indexOfTodo < this.list.length){
    this.list.splice(indexOfTodo,1);
    return this.list;
  } else{
    //throw new Error('Give proper index');
    return null;
  }
 }

 update(index, updatedTodo){
  if(index >= 0 && index < this.list.length){
    this.list[index] = updatedTodo;
  } else{
   // throw new Error('Give proper index');
   return null;
  }
 }

 getAll(){
  return this.list;
 }

 get(indexOfTodo){
  if(indexOfTodo >= 0 && indexOfTodo < this.list.length){
    return this.list[indexOfTodo];
  } else{
    //throw new Error('Give proper index');
    return null;
  }
 }

 clear(){
  this.list.length = 0;
 }
}



module.exports = Todo;
