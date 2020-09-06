import React, { useEffect } from "react";

const Errors = () => {
  function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve("slow");
        console.log("slow promise is done");
      }, 2000);
    });
  }

  useEffect(() => {
    try {
      resolveAfter2Seconds();
      const v = "qpr";
      var x = 2 + v;
    } catch (e) {
      console.log(e.message);
    }
    return x;
  });
  return <div></div>;
};

export default Errors;
