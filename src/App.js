import React, { useState } from 'react';
import './style.css';
import TaskInput from './components/TaskInput';
import ToDoList from './components/ToDoList';

export default function App() {
  const [listToDo, setListToDo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== '') {
      setListToDo([...listToDo, inputText]);
    } else {
      alert('Empty task cannot be added.');
    }
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listToDo];
    newListTodo.splice(key, 1);
    setListToDo([...newListTodo]);
  };

  return (
    <div>
      <h1>To Do App</h1>
      <div className="main-container">
        <div className="center-container"></div>
      </div>
      <TaskInput addList={addList} />
      {listToDo.map((listItem, i) => {
        return (
          <ToDoList
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
          />
        );
      })}
    </div>
  );
}
