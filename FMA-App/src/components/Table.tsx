import { Character } from "../../public/fma-data";

type CharObj = {
  charDetails: Character[];
};

export function Table(sortedData: CharObj) {
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
          {sortedData.charDetails.map((char: Character, index: number) => {
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
