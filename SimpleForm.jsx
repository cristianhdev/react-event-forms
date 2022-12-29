import React from 'react';
import { TodoList } from './TodoList';
import { useForm } from './useForm';
import { useTodo } from './useTodo';
import { FormTodoList } from './FormTodoList';

export const SimpleForm = () => {
  const {
    todos,
    todosCount,
    todosPending,
    onNewTodoItem,
    onRemove,
    onToggleListItem,
  } = useTodo();

  const { formState, onInputChange, nombre, apellido, edad } = useForm({
    nombre: '',
    apellido: '',
    edad: '',
  });

  return (
    <>
      <div className="container">
        <h5>
          Total:{todosCount} | Pendientes:{todosPending}
        </h5>
        <hr></hr>
        <div>
          <div>
            <div>
              <FormTodoList newTodo={onNewTodoItem} />
            </div>
            <div>
              <TodoList
                listTodo={todos}
                onRemoveItem={onRemove}
                onToggleItem={onToggleListItem}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
