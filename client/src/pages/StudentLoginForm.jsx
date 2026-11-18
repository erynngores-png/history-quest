import { useState } from "react";

function StudentLoginForm ({onLogin}) {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    
    return (
        <main>
            <h1>Student Login</h1>
            <form>
                <label>Enter your Username:
                    <input 
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} 
                    />
                </label>
                <label>Enter your Password:
                    <input 
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
            </form>

            <button onClick={() => onLogin({username, password})}>Login</button>
        </main>
    )
}

export default StudentLoginForm;
