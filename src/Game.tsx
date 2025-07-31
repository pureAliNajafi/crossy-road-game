import { Map } from "./components/Map";
import Player from "./components/Player";
import Scene from "./components/Scene";

import { Controls } from "./components/Controls";
import "./Game.css";
const Game = () => {
  return (
    <div className="game">
      <Scene>
        <Player />
        <Map />
      </Scene>
      <Controls />
    </div>
  );
};

export default Game;
