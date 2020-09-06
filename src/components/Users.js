import React, { useState } from "react";

const Users = () => {
  const [value, setValue] = useState("");
  const [isGoing, setIsGoing] = useState(false);
  function handleChange(event) {
    const target = event.target;
    target.type === "checkbox"
      ? setIsGoing(!isGoing)
      : setValue(event.target.value);
    console.log(value);
    console.log(isGoing);
  }
  return (
    <form>
      <label>
        is Going:
        <input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          value={isGoing}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Guests:
        <input
          name="value"
          type="number"
          value={value}
          auatofocus="true"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Users;