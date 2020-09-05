import React from "react";

function List() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number, ind) => <li key={ind}>{number}</li>);
  return <div>{listItems}</div>;
}

export default List;
