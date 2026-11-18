import { useState } from "react";

function TeacherRegisterForm () {
    const[email, setEmail] = useState("");
    const[newPassword, setNewPassword] = useState("");
    
    return (
        <main>
            <h1>Enter your Email and Create a Password</h1>
             <form>
                <label>Enter your Email :
                    <input 
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} 
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

export default TeacherRegisterForm;