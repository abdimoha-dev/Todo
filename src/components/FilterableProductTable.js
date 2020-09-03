import React, { useState } from "react";

const FilterableProductTable = (props) => {
  const [search, setSearch] = useState("Search");
  const [check, setCheck] = useState(false);

  var prd = props.data.map((product) => (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  ));

  function btnChange(e) {
    console.log(e.target.value);
    if (e.target.value) {
      const myData = props.data.filter((sl) => sl.stocked === true);
      console.log(myData);
    } else {
      console.log("Mohammed!!");
    }
  }

  return (
    <div className="productContainer">
      <input type="text" value={search} />
      <br></br>
      <label>
        Check
        <input type="checkbox" checked={check} onChange={btnChange} />
      </label>
      <div className="productTable">{prd}</div>
    </div>
  );
};

export default FilterableProductTable;
