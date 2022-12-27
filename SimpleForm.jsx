import React, { useEffect, useReducer, useState } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { useForm } from './useForm';
import { FormTodoList } from './FormTodoList';

const initialTodoState = [
  {
    id: new Date().getTime(),
    title: 'Tarea 2',
    done: false,
  },
  {
    id: new Date().getTime(),
    title: 'Tarea 1',
    done: false,
  },
];

export const SimpleForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  const { formState, onInputChange, nombre, apellido, edad } = useForm({
    nombre: '',
    apellido: '',
    edad: '',
  });

  const onNewTodoItem = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormTodoList newTodo={onNewTodoItem} />
      {/*  <input
        type="text"
        name="nombre"
        placeholder="Juan Casas"
        className="form-control"
        id="nombre"
        value={nombre}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="apellido"
        placeholder="santillan"
        className="form-control"
        id="apellido"
        value={apellido}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="edad"
        placeholder="21"
        className="form-control"
        id="edad"
        value={edad}
        onChange={onInputChange}
      /> */}
      <TodoList listTodo={state} />
    </>
  );
};
