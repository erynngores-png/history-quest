function TeacherRegistration ({onChooseAction}) {
    return(
        <main>
            <h1>Teacher Login</h1>
            <button onClick={() => onChooseAction("login")}>Login</button>
            <button onClick={() => onChooseAction("register")}>Create an Account</button>
        </main>
    )
}

export default TeacherRegistration;