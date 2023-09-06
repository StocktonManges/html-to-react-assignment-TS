import { characters } from "../public/fma-data";
import { Header } from "./components/Header.tsx";
import { Table } from "./components/Table.tsx";
import { Cards } from "./components/Cards";
import "./css/index.css";
import "./css/styles.css";

export default function App() {
  return (
    <>
      <Header />
      <Table characters={characters} />
      <Cards characters={characters} />
    </>
  );
}
