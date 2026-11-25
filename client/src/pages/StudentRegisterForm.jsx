import { useState } from "react";

function StudentRegisterForm ( {onRegister} ) {
    const[newUsername, setNewUsername] = useState("");
    const[newPassword, setNewPassword] = useState("");
    const[classCode, setClassCode] = useState("");
    
    return (
        <main>
            <h1>Create a Username and Password</h1>
             <form onSubmit={async (event) => {
                event.preventDefault();

                try {
                    const response = await fetch("http://localhost:3000/api/auth/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: newUsername,
                            password: newPassword,
                            role: "student",
                            classCode
                        })
                    });

                    const data = await response.json();
                    if (response.ok) {
                        onRegister();
                    } else {
                        alert(data.message);
                    }
                } catch (error) {
                    alert("Could not connect to the server.");
                }
             }}
             >
                <label>Create your Username:
                    <input 
                        type="text"
                        required
                        value={newUsername}
                        onChange={(event) => setNewUsername(event.target.value)} 
                    />
                </label>
                <label>Create your Password:
                    <input 
                        type="password"
                        required
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                    />
                </label>
                <label>Enter Your Class Code:
                    <input 
                        type="text"
                        required
                        value={classCode}
                        onChange={(event) => setClassCode(event.target.value)}
                    />
                </label>

                <button type="submit">Register</button>
            </form>

        </main>
    );
}

export default StudentRegisterForm;