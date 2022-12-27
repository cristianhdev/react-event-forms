import React from 'react';

export const ItemList = ({ titulo, id }) => {
  return (
    <>
      <li key={id} className="list-group-item">
        <div className="row">
          <div className="col-8">{titulo}</div>
          <div className="col-4">
            <button className="btn btn-danger mt-2">x</button>
          </div>
        </div>
      </li>
    </>
  );
};
