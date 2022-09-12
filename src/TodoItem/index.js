import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <i class="bi bi-check2"></i>
      </span>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <i class="bi bi-trash3-fill"></i>
      </span>
    </li>
  );
}

export { TodoItem };