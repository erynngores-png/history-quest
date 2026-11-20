function StudentRegistration ({onChooseAction, onBack}) {
    return(
        <main>
            <h1>Student Login</h1>
            <button onClick={() => onChooseAction("login")}>Login</button>
            <button onClick={() => onChooseAction("register")}>Create an Account</button>
            <button onClick={() => onBack("back")}>Back</button>
        </main>
    )
}

export default StudentRegistration;