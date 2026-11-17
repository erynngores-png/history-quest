
import { useState } from "react";
import "./App.css";
import welcomeImage from "./assets/history-quest-welcome.png";
import AccountChoice from "./pages/AccountChoice";
import WorldSelection from "./pages/WorldSelection";
import CharacterCreator from "./pages/CharacterCreator";
import TownSquare from "./pages/TownSquare";

function App() {
  const [started, setStarted] = useState(false);
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [character, setCharacter] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  function resetGame() {
    setStarted(false);
    setSelectedWorld(null);
    setCharacter(null);
    setSelectedRole(null);
  }

  return (
    <main className="game">
      {!started ? (
        <section className="intro-page">
          <div
            className="intro-art"
            style={{ backgroundImage: `url(${welcomeImage})` }}
          >
            <div className="intro-card">

              <h1>History Quest</h1>

              <h2>Explore the American Revolution</h2>

              <button
                className="begin-button"
                onClick={() => setStarted(true)}
              >
                Begin Your Adventure <span>→</span>
              </button>

            </div>
          </div>
        </section>
      ) : selectedRole === null ? (
        <AccountChoice
          onSelectedRole={(roleId) => {
            setSelectedRole(roleId);
          }}
        />
      ) : character === null ? (
        <CharacterCreator
          onComplete={(newCharacter) => {
            setCharacter(newCharacter);
          }}
        />
      ) : selectedWorld === null ? (
        <WorldSelection
          onSelectWorld={(worldId) => {
            setSelectedWorld(worldId);
          }}
        />
      ) : (
        <>
          <TownSquare character={character} />

          <footer>
            <button
              className="back-button"
              onClick={resetGame}
            >
              ← Back to Welcome
            </button>
          </footer>
        </>
      )}
    </main>
  );
}

export default App;
