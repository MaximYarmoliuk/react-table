import React from "react";
import data from "./data.json";
import Table from "./Table/Table";

export default function App() {
  return (
    <div className="container">
      <Table data={data}  />
    </div>
  );
}
