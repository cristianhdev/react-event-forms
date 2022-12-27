import { useRouteError } from 'react-router-dom';
import * as React from 'react';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Uppss!! pagina no encontrada</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
