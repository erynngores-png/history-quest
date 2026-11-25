function TeacherDashboard ({ classCode, onLogout }) {
    return (
        <main>
          <h1>Teacher Dashboard</h1>
          <p>Welcome to History Quest!</p>

          <h2>Your Class Code</h2>
          <p>{classCode}</p>
          <p>Share this code with your students so they can join your class.</p>

          <button onClick={resetGame}>
            Log Out
          </button>
        </main>
    );
}

export default TeacherDashboard;