import React from "react";
import ReactDOM from "react-dom/client";
import { data, Character } from "../public/fma-data";
import { Header } from "./components/Header.tsx";
import { Table } from "./components/Table.tsx";
import { Cards } from "./components/Cards";
import sortCharArray from "./utils.tsx";
import "./css/index.css";
import "./css/styles.css";

const dataArrayCopy: Character[] = [...data];
const sortedData: Character[] = sortCharArray(dataArrayCopy);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <Header />
    <Table characters={sortedData} />
    <Cards characters={data} />
  </React.StrictMode>
);
