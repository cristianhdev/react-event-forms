import React from 'react';
import { useForm } from './useForm';

export const FormTodoList = ({ newTodo }) => {
  const { formState, titulo, onInputChange, onResetForm } = useForm({
    id: new Date().getTime(),
    titulo: '',
    done: false,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    newTodo(formState);
    onResetForm();
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
        <input type="submit" className="btn btn-success" value="GUARDAR" />
      </form>
    </>
  );
};
