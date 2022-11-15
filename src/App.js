import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Linda", key: 1 },
        { name: "Frank", key: 2 },
        { name: "Jacky", key: 3 },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.key}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
