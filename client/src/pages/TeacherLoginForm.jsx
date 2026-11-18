import { useState } from "react";

function TeacherLoginForm ({onLogin}) {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    return (
        <main>
            <h1>Teacher Login</h1>
            <form>
                <label>Enter your Email:
                    <input 
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} 
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

            <button onClick={() => onLogin({email, password})}>Login</button>
        </main>
    )
}

export default TeacherLoginForm;
