import { useState } from "react";

function StudentRegisterForm () {
    const[newUsername, setNewUsername] = useState("");
    const[newPassword, setNewPassword] = useState("");
    
    return (
        <main>
            <h1>Create a Username and Password</h1>
             <form>
                <label>Create your Username:
                    <input 
                        type="text"
                        value={newUsername}
                        onChange={(event) => setNewUsername(event.target.value)} 
                    />
                </label>
                <label>Create your Password:
                    <input 
                        type="password"
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                    />
                </label>
            </form>
        </main>
    )
}

export default StudentRegisterForm;