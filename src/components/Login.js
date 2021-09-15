import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

export default function Login({ open, children, onClose }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    
    useEffect(() => {
        if (localStorage.getItem('auth_token') !== null) {
            setIsAuth(true);
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
                    localStorage.setItem('auth_token', data);
                    setIsAuth(true)
                    console.log(setIsAuth)
                    console.log('auth??')
                } else {
                    setUsername('');
                    setPassword('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };

    const logOut = e => {
        e.preventDefault();
    
        fetch('https://djangoeventsapi.herokuapp.com/api/auth/token/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token${localStorage.getItem('auth_token')}`
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.clear();
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
                <button className='formButton' onClick={logOut}> Déconnection </button>
                <button className='formButton' onClick={onClose}> fermer </button>
            </form>

            {children}
        </div>,
        document.getElementById('portal')
    )
}
