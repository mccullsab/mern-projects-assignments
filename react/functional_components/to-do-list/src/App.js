import './App.css';
import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoDisplay from './components/ToDoDisplay';

function App() {
  const [allTodoItems, setallTodoItems] = useState([]);
  // allTodoItems
  // [
  //   {'todo': "abby", 'is_done': True},
  //   {'todo': "chee", 'is_done': False},

  // ]

  const removeFromList = ( index ) => {
    const firstArr = allTodoItems.slice(0, index);
    const secondArr = allTodoItems.slice(index + 1);
    setallTodoItems([...firstArr , ...secondArr]);
  }

  const stuffToDo = ( newToDoString ) => {
    // create const newAllTodoItems that is equal to
    // allTodoItems (which is the current/old one) + the newTodo ("abby")
    // update the state by calling set all todo items with newAllTodoItems

    const newTodoDict = {
      "to_do" : newToDoString,
      "status" : false
    } // make this a new todo dictionary

    setallTodoItems([...allTodoItems, newTodoDict])
  }
  
  const changeStatusCheck = ( index ) => {
    // get the item at the index
    let todoItem = allTodoItems[index];
    todoItem.status = todoItem.status ? false : true;
    const firstArr = allTodoItems.slice(0, index);
    const secondArr = allTodoItems.slice(index + 1);
    setallTodoItems([...firstArr ,todoItem, ...secondArr]);
    
  }

  return (
    <div className="App">
      <ToDoForm onnewlist = {stuffToDo}/>
      <ToDoDisplay todolist = {allTodoItems} removeFromTodoList = {removeFromList} changeStatus = {changeStatusCheck}/>
    </div>
  );
}

export default App;
