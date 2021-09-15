import { Link } from 'react-router-dom'
import React, { useState, useEffect, Fragment } from 'react';
import '../style/Navbar.css'

function Navbar() {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth_token') !== null) {
            setIsAuth(true);
        }
    }, []);

    
    return (

        <div className='containerNav'>
            <Fragment>
                <Link to='/About'><p className='navbarP'>A propos</p></Link>
                <Link to='/Calendar'><p className='navbarP'>Calendrier</p></Link>
                <Link to='/Events'><p className='navbarP'>Chantiers</p></Link>
                <Link to='/Gallery'><p className='navbarP'>Gallerie</p></Link>
                <Link to='/Ressource'><p className='navbarP'>Ressource</p></Link>
            </Fragment>
            {isAuth === true ? (
                <Fragment>
                    <Link to='/CreateEvent'><p className='navbarP'>Ajouter event</p></Link>
                </Fragment>
            ) : (null)}

        </div >
    )
}

export default Navbar