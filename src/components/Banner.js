import React, { useState } from 'react'
import Login from './Login'

import banner from './img/banner.jpg'
import "../style/Banner.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const user = <FontAwesomeIcon icon={faUser} />
function Banner() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='banner' style={{backgroundImage : `url(${banner})`}}>
            <p className='user' onClick={() => setIsOpen(true)} >{user}</p>
            <Login open={isOpen} onClose={() => setIsOpen(false) }>
            </Login>
        </div>
    )
}

export default Banner