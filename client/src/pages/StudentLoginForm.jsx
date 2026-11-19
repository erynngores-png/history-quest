import { useState } from "react";

function StudentLoginForm ({onLogin}) {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    
    return (
        <main>
            <h1>Student Login</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                onLogin({ username, password });
            }}>
                <label>Enter your Username:
                    <input 
                        type="text"
                        required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} 
                    />
                </label>
                <label>Enter your Password:
                    <input 
                        type="password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <button type="submit">Login</button>
            </form>

        </main>
    )
}

export default StudentLoginForm;
