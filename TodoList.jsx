import React from 'react';
import { ItemList } from './ItemList';

export const TodoList = ({ listTodo }) => {
  return (
    <>
      <ul className="list-group">
        {listTodo.map((item) => {
          return <ItemList titulo={item.titulo} id={item.id} />;
        })}
      </ul>
    </>
  );
};
