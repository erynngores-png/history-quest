import { useState } from "react";

function StudentRegisterForm ({ onRegister }) {
    const[newUsername, setNewUsername] = useState("");
    const[newPassword, setNewPassword] = useState("");
    
    return (
        <main>
            <h1>Create a Username and Password</h1>
             <form onSubmit={(event) => {
                event.preventDefault();
                onRegister({ newUsername, newPassword })
             }}>
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
                <button type="submit">Register</button>
            </form>

        </main>
    );
}

export default StudentRegisterForm;