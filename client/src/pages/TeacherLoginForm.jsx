import { useState } from "react";

function TeacherLoginForm ({onLogin}) {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    return (
        <main>
            <h1>Teacher Login</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                onLogin({ email, password });
            }}>
                <label>Enter your Email:
                    <input 
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} 
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

export default TeacherLoginForm;
