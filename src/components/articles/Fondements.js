import React from 'react'
import permaculture from '../img/Fleur-Perma.jpg'

export default function Fondements() {
    return (
        <div className='aboutContainer'>
            <h1>UN FONDEMENT</h1>
            <p>
                Tel l’arbre dont les racines puisent dans la terre et les branches se tournent vers le ciel, notre projet se nourrit de la sève spirituelle pour faire éclore la fleur permaculturelle
            </p>
            <img src={permaculture}></img>
        </div>
    )
}
