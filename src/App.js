import React, { useState, useEffect } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import Todo from "./components/Todo";
import List from "./components/List";
import Users from "./components/Users";

const App = () => {
  //const [isOnline, setIsOnline] = useState(null);
  const data = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  return (
    <div className="app">
      <Users />
    </div>
  );
};

export default App;
