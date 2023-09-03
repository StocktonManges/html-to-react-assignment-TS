import { Component } from "react";
import { Character } from "../../public/fma-data";

export class Cards extends Component<{ characters: Character[] }> {
  render() {
    return (
      <div key="hello world" className="card-container container">
        {this.props.characters.map((char, index) => {
          return (
            <div key={index} className="card">
              <div className="card-title">
                <h2>{char.name}</h2>
                <h4>{char.nickName}</h4>
              </div>
              <div className="img-wrapper">
                <img src={char.imageUrl} alt="character image" />
              </div>
              <p>{char.background}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
