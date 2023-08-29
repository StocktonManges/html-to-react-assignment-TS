import React from "react";
import ReactDOM from "react-dom/client";
import { data, Character } from "../public/fma-data";
import { Header } from "./components/Header.tsx";
import { Table } from "./components/Table.tsx";
import { sortCharArray } from "./components/functions.tsx";
import { Cards } from "./components/Cards";
import "./css/index.css";
import "./css/styles.css";

const sortedData: Character[] = sortCharArray(data);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <Header />
    <Table charDetails={sortedData} />
    <Cards charDetails={sortedData} />
  </React.StrictMode>
);
