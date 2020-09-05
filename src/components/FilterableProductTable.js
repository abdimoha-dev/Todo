import React from "react";

const FilterableProductTable = () => {
  function resolverAfter2Sec() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resloved");
      }, 2000);
    });
  }
  async function asyncCall() {
    console.log("calling!!");
    const result = await resolverAfter2Sec();
    console.log(result);
  }
  return (
    <div>
      <button onClick={asyncCall}>Click Me</button>
    </div>
  );
};

export default FilterableProductTable;
