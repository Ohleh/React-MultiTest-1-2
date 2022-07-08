import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, onDeletetodo, onToggleComplited }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, complited }) => (
      <li key={id} className="TodoList__item">
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={complited}
          onChange={() => onToggleComplited(id)}
        />
        <p className="TodoList__text">{text}</p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeletetodo(id)}
        >
          dell
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
