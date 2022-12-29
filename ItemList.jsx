import React from 'react';

export const ItemList = ({ todo, onRemoveItemList, onToggleTodo }) => {
  return (
    <>
      <li key={todo.id} className="list-group-item">
        <div className="row">
          <div className="col-8">
            <span
              onClick={() => onToggleTodo(todo.id)}
              class={`${todo.done ? 'text-decoration-line-through' : ''}`}
            >
              {todo.titulo}
            </span>
          </div>
          <div className="col-4 text-center">
            <button
              onClick={() => onRemoveItemList(todo.id)}
              className="btn btn-danger mt-2"
            >
              x
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
