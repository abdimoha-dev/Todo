import React, { useEffect } from "react";

const Errors = () => {
  useEffect(() => {
    try {
      const v = "qpr";
      const x = 2 + v;
      console.log(x);
    } catch (e) {
      console.log(e.message);
    }
  });
  return <div></div>;
};

export default Errors;
