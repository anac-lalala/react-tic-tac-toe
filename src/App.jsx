import { Gameboard } from "./components/Gameboard";
import { Player } from "./components/Player";

function App() {
  return (
    <main>
      <div className="" id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <Gameboard />
      </div>
    </main>
  );
}

export default App;
