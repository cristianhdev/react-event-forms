export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...initialState, action.payload];
    case 'REMOVE':
      console.log(action.payload);
      return initialState.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE':
      console.log(action.payload);
      return initialState.map((todo) => {
        if (todo.id === action.payload)
          return {
            ...todo,
            done: !todo.done,
          };
        return todo;
      });
    default:
      return initialState;
  }
};
