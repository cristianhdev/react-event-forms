import React from 'react';
import { useForm } from './useForm';

export const FormTodoList = ({ newTodo }) => {
  const { formState, onInputChange, titulo } = useForm({
    id: new Date().getTime(),
    titulo: '',
    done: false,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    newTodo(formState);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="santillan"
          className="form-control"
          id="apellido"
          value={titulo}
          onChange={onInputChange}
        />
        <input type="submit" value="GUARDAR" />
      </form>
    </>
  );
};
