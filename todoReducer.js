export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Metodo ABC no implemetado');
    default:
      return initialState;
  }
};
