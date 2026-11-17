function AccountChoice ({onSelectedRole}) {
    return (
        <main>
            <h1>Welcome to History Quest</h1>

            <button onClick={() => onSelectedRole("student")}>Student</button>
            <button onClick={() => onSelectedRole("teacher")}>Teacher</button>
        </main>
    )
}

export default AccountChoice;