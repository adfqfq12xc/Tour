import { useRef, useContext, useState } from "react";
import "./Login.css";
import { get, getDatabase, ref } from 'firebase/database';
import { app } from '../../firebaseconfud';
import { UserContext } from '../../usercontext';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

function Login() {
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState('');  // Add a state variable for error messages
    const [submit,setsubmit]=useState('Login')
    const navigate=useNavigate()

    const Email = useRef('');
    const pass = useRef('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setsubmit('Login...')
        const db = getDatabase(app);
        const dataref = ref(db, 'Login');
        const snapshot = await get(dataref);
        if (snapshot.exists()) {
            const users = Object.values(snapshot.val());
            const foundUser = users.find(user1 => user1.Email.trim() === Email.current.value.trim() && user1.Pass.toString() === pass.current.value);
            if (foundUser) {
                setUser(Email.current.value);
                console.log("User logged in: " + user);
                setError('');  // Clear any previous error messages
                navigate('/')

            } else {
                setError("Email does not exist or password is incorrect");  // Set error message
                console.log("User not found or incorrect credentials");
                setsubmit("Login");
            }
        } else {
            setError("No users found in the database");  // Set error message if the database is empty
        }
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Email</label>
                            <input
                                type='email'
                                name="email"
                                className="input"
                                placeholder="Email"
                                ref={Email}
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                className="input"
                                name="password"
                                placeholder="Password"
                                ref={pass}
                            />
                        </div>
                        <button className="buttonsub">{submit}</button>
                    </div>
                    {error && <div className="error-message">{error}</div>}  {/* Display the error message */}
                </form>
            </div>
        </>
    );
}

export default Login;
