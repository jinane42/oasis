import { Link } from 'react-router-dom'
import React, { useState, useEffect, Fragment } from 'react';
import '../style/Navbar.css'

function Navbar() {

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true);
        }
    }, []);

    return (

        <div className='containerNav'>
            <Fragment>
                <Link to='/About'><p>A propos</p></Link>
                <Link to='/Calendar'><p>Calendrier</p></Link>
                <Link to='/Events'><p>Chantiers</p></Link>
                <Link to='/Gallery'><p>Gallerie</p></Link>
                <Link to='/Ressource'><p>Ressource</p></Link>
            </Fragment>
            {isAuth === true ? (
                <Fragment>
                    <Link to='/CreateEvent'><p>Ajouter event</p></Link>
                </Fragment>
            ) : (null)}

        </div >
    )
}

export default Navbar