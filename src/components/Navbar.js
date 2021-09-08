import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React, { Fragment } from 'react';
import '../style/Navbar.css'
import About from './About'
import Events from './Events'
import Gallery from './Gallery'
import Calendar from './Calendar'

function Navbar() {
    return (

        <div className='container'>
            <Fragment>
                <Link to='/About'><p>A propos</p></Link>
                <Link to='/Calendar'><p>Calendrier</p></Link>
                <Link to='/Events'><p>Chantiers</p></Link>
                <Link to='/Gallery'><p>Gallerie</p></Link>
                <Link to='/Ressource'><p>Ressource</p></Link>
            </Fragment>



        </ div >
    )
}

export default Navbar