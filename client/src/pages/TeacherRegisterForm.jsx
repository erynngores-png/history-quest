import { useState } from "react";

function TeacherRegisterForm ({ onRegister }) {
    const[email, setEmail] = useState("");
    const[newPassword, setNewPassword] = useState("");
    
    return (
        <main>
            <h1>Enter your Email and Create a Password</h1>
             <form onSubmit={async (event) => {
                event.preventDefault();
                const response = await fetch("http://localhost:3000/api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password: newPassword,
                        role: "teacher"
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    onRegister();
                } else {
                    alert(data.message);
                }
             }}>
                <label>Enter your Email :
                    <input 
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                </label>
                <label>Create your Password:
                    <input 
                        type="password"
                        required
                        minLength={8}
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                    />
                </label>
                
                <button type="submit">Register</button>
            </form>

        </main>
    );
}

export default TeacherRegisterForm;