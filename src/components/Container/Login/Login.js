import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import './Login.css';

import Users from '../../../config/users';

const Login = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isIncorect, setIsIncorect] = useState(false);

    const history = useHistory();

    const makeAuthed = () => {
        if(Users.hasOwnProperty(user)) {
            if(Users[user].password === password) {
                props.cb(true, user);
                history.push('profile');
            } else {
            setIsIncorect(true);
            }

        } else {
            setIsIncorect(true);
        }
    }
    return (
        <div className="login-container">
            <div className="inner-login">
                <h1>Login</h1>
                <div>
                    <input className="user" type="text" placeholder="User" value={user}
                        onChange={(e) => setUser(e.target.value)} />
                </div>
                <div>
                    <input className="pass" type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div style={{display: isIncorect ? 'block' : 'none'}}>
                    <span style={{color: "red"}}>User or Password incorect</span>
                </div>
                <div>
                    <button className="auth" onClick={() => makeAuthed()}>Log In</button>
                </div>
            </div>

        </div>
    )
}

export default Login;