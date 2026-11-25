import { useState } from "react";

function TeacherLoginForm ({onLogin}) {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    return (
        <main>
            <h1>Teacher Login</h1>
            <form onSubmit={async (event) => {
                event.preventDefault();
                
                try {
                    const response = await fetch("http://localhost:3000/api/auth/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email,
                            password,
                            role: "teacher"
                        })
                    });

                    const data = await response.json();

                    if (response.ok) {
                        onLogin();
                    } else {
                        alert(data.message);
                    }
                } catch (error) {
                    alert("Unable to connect to the server.");
                }
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
