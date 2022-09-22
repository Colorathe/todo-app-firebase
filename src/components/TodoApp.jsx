import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-ointer flex items-center`,
};

const TodoApp = ({ todo, handleComplete, handleDelete }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => handleComplete(todo)}
          type='checkbox'
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => handleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={(e) => handleDelete(todo.id)}>
        {<FaRegTrashAlt />}
      </button>
    </li>
  );
};

export default TodoApp;
