import React, { Component, useCallback, useContext, useState } from 'react';
import { render } from 'react-dom';

import { SimpleForm } from './SimpleForm';

const HijoElementCount = React.memo(({ incremenet }) => {
  console.log('redibuja');

  return (
    <>
      <button onClick={() => incremenet()}>+</button>
      <button>-</button>
    </>
  );
});

export const Online = () => {
  let online = navigator.onLine;

  const incrementar = useCallback(() => {
    setContador((onlValue) => onlValue + 1);
  }, []);

  const [contador, setContador] = useState(0);

  /* if (online) {
    return <div className="conectado">Conectado</div>;
  } else {
    return <div className="desconectado">Desconectado</div>;
  } */

  return (
    <>
      <SimpleForm />
    </>
  );
};

/* export default class Online extends Component {
  constructor(props) {
    super(props);
  }

  online = navigator.onLine;

  render() {
    if (this.online) {
      return <div className="conectado">Conectado</div>;
    } else {
      return <div className="desconectado">Desconectado</div>;
    }
  }
}
 */
