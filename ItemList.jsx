import React from 'react';

export const ItemList = ({ title, id }) => {
  return (
    <>
      <li key={id} className="list-group-item">
        {title} <button className="btn btn-danger mt-2">x</button>
      </li>
    </>
  );
};
