
import { useState } from "react";
import "./App.css";
import welcomeImage from "./assets/history-quest-welcome.png";

import AccountChoice from "./pages/AccountChoice";
import StudentRegistration from "./pages/StudentRegistration";
import StudentLoginForm from "./pages/StudentLoginForm";
import StudentRegisterForm from "./pages/StudentRegisterForm";
import TeacherRegistration from "./pages/TeacherRegistration";
import TeacherRegisterForm from "./pages/TeacherRegisterForm";
import TeacherLoginForm from "./pages/TeacherLoginForm";
import WorldSelection from "./pages/WorldSelection";
import CharacterCreator from "./pages/CharacterCreator";
import TownSquare from "./pages/TownSquare";

function App() {
  const [started, setStarted] = useState(false);
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [character, setCharacter] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const [studentAction, setStudentAction] = useState(null);
  const [teacherAction, setTeacherAction] = useState(null);

  const [studentLoggedIn, setStudentLoggedIn] = useState(false);
  const [teacherLoggedIn, setTeacherLoggedIn] = useState(false);

  function resetGame() {
    setStarted(false);
    setSelectedWorld(null);
    setCharacter(null);
    setSelectedRole(null);
    setStudentAction(null);
    setTeacherAction(null);
    setStudentLoggedIn(false);
    setTeacherLoggedIn(false);
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

      ) : selectedRole === "student" && studentAction === null ? (

        <StudentRegistration
          onChooseAction={(actionId) => {
            setStudentAction(actionId);
          }}
        />

      ) : selectedRole === "student" && studentAction === "login" ? (

        <StudentLoginForm
          onLogin={(loginInfo) => {
            console.log(loginInfo);
            setStudentLoggedIn(true);
            setStudentAction("complete");
          }}
        />

      ) : selectedRole === "student" && studentAction === "register" ? (

        <StudentRegisterForm
          onRegister={(registerInfo) => {
            console.log(registerInfo);
            setStudentLoggedIn(true);
            setStudentAction("complete");
          }}
        />

      ) : selectedRole === "teacher" && teacherAction === null ? (

        <TeacherRegistration
          onChooseAction={(actionId) => {
            setTeacherAction(actionId);
          }}
        />

      ) : selectedRole === "teacher" && teacherAction === "login" ? (

        <TeacherLoginForm
          onLogin={(loginInfo) => {
            console.log(loginInfo);
            setTeacherLoggedIn(true);
            setTeacherAction("complete");
          }}
        />

      ) : selectedRole === "teacher" && teacherAction === "register" ? (

        <TeacherRegisterForm
          onRegister={(registerInfo) => {
            console.log(registerInfo);
            setTeacherLoggedIn(true);
            setTeacherAction("complete");
          }}
        />

      ) : selectedRole === "student" && studentLoggedIn ? (

        character === null ? (

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

          <TownSquare character={character} />

        )

      ) : selectedRole === "teacher" && teacherLoggedIn ? (

        <main>
          <h1>Teacher Dashboard</h1>
          <p>Welcome to History Quest!</p>

          <button onClick={resetGame}>
            Log Out
          </button>
        </main>

      ) : (

        <main>
          <h1>Something went wrong.</h1>

          <button onClick={resetGame}>
            Return to Welcome
          </button>
        </main>

      )}

      {studentLoggedIn && selectedRole === "student" && (
        <footer>
          <button
            className="back-button"
            onClick={resetGame}
          >
            Back to Welcome
          </button>
        </footer>
      )}

    </main>
  );
}

export default App;
