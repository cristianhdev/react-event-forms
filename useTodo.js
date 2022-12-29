import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

export const useTodo = (initialTodoState = []) => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
  };

  const [todos, dispatch] = useReducer(todoReducer, initialTodoState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onNewTodoItem = (data) => {
    dispatch({
      type: 'ADD',
      payload: data,
    });
  };

  const onRemove = (id) => {
    console.log(id);
    dispatch({
      type: 'REMOVE',
      payload: id,
    });
  };

  const onToggleListItem = (id) => {
    dispatch({
      type: 'TOGGLE',
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    todosPending: todos.filter((todo) => !todo.done).length,
    onNewTodoItem,
    onRemove,
    onToggleListItem,
  };
};
