import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

export default function Login({ open, children, onClose }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth_token') !== null) {

        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        };

        fetch('https://djangoeventsapi.herokuapp.com/api/auth/token/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    localStorage.clear();
                    localStorage.setItem('auth_token', data);

                } else {
                    setUsername('');
                    setPassword('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };


    if (!open) return null
    return ReactDOM.createPortal(
        <div>
            <form className="login" onSubmit={onSubmit}>
                <div className="formContainer">
                    <label htmlFor='username'>Username:</label> <br />
                    <input className='input' placeholder="Username"
                        name='username'
                        type='username'
                        value={username}
                        required
                        onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className="formContainer">
                    <label htmlFor='password'>Password:</label> <br />
                    <input className='input' type="password" placeholder="Password"
                        name='password'
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button className='formButton' type='submit' value='Login'>Connection</button>
                <button className='formButton' onClick={onClose}> fermer </button>
            </form>

            {children}
        </div>,
        document.getElementById('portal')
    )
}
