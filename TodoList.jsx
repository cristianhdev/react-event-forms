import React from 'react';
import { ItemList } from './ItemList';

export const TodoList = ({ listTodo, onRemoveItem, onToggleItem }) => {
  return (
    <>
      <ul className="list-group">
        {listTodo.map((item) => {
          return (
            <ItemList
              todo={item}
              onRemoveItemList={onRemoveItem}
              onToggleTodo={onToggleItem}
            />
          );
        })}
      </ul>
    </>
  );
};
