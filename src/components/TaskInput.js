import React, { useState } from 'react';

function TaskInput(props) {
  const [inputText, setInputText] = useState('');
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box"
        placeholder="Enter Task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <input type="date" />
      <p>Add Description</p>
      <div
        contenteditable="true"
        style={{ outline: '0px solid transparent' }}
        placeholder="Type something..."
      ></div>
      <label for="elements">Add New </label>
      <select name="elements" id="cars">
        <option value="volvo">Currency</option>
        <option value="saab">Units</option>
        <option value="mercedes">Date</option>
      </select>
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText('');
        }}
      >
        +
      </button>
    </div>
  );
}

export default TaskInput;
