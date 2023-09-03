import { Character } from "../../public/fma-data";

type TableProps = {
  characters: Character[];
};

export function Table({ characters }: TableProps) {
  return (
    <div key="Top Characters" className="top-characters container">
      <h2>Top Characters</h2>
      <table>
        <tbody>
          <tr>
            <th className="name">Name</th>
            <th className="skillset">Skillset</th>
            <th className="votes">Votes</th>
          </tr>
          {characters.map((char: Character, index: number) => {
            if (index < 5) {
              return (
                <tr key={index} className={index % 2 === 0 ? "dark" : "light"}>
                  <td>{char.name}</td>
                  <td>{char.skillset}</td>
                  <td>{char.votes}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
