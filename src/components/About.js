import '../style/About.css'
import index from './img/index.jpeg'
import { Link } from 'react-router-dom'
import chantier1 from './img/chantier1.jpg'
import chantier2 from './img/chantier2.jpg'
import tournesol from './img/tournesol.jpg'
import fleur from './img/Fleur-Perma.jpg'
import logo from './img/logo.png'

function About() {



    return (
        <div className="band">
            <div className="card"   >
                <Link to='/Qui-sommes-nous'>
                <div className="thumb" >
                        <img className='image' src={index}></img>
                        <article>
                            <h1>Qui sommes-nous ? </h1>
                        </article>
                </div>
                </Link>
            </div>
            <div className="card2">
                <Link to='/Valeurs'>
                    <div className="thumb" >
                        <img className='image' src={tournesol}></img>
                    </div>
                    <article>
                        <h1>Les valeurs de l'Oasis du vert Marais</h1>
                    </article>
                </Link>
            </div>
            <div className="card3">
                <Link to='/Actions'>
                    <div className="thumb" >
                        <img className='image' src={chantier1}></img>
                    </div>
                    <article>
                        <h1>Nos actions principales</h1>
                    </article>
                </Link>
            </div>
            <div className="card3">
                <Link to='/Valeurs'>
                    <div className="thumb" >
                        <img className='image' src={chantier2}></img>
                    </div>
                    <article>
                        <h1>A venir</h1>
                    </article>
                </Link>
            </div>
            <div className="card4">
                <Link to='/Fondements'>
                    <div className="thumb" >
                        <img className='image' src={fleur}></img>
                    </div>
                    <article>
                        <h1>Un fondement</h1>
                    </article>
                </Link>
            </div>
            <div className="card2">
                <Link to='/Valeurs'>
                    <div className="thumb" >
                        <img className='image' src={chantier2}></img>
                    </div>
                    <article>
                        <h1>A venir</h1>
                    </article>
                </Link>
            </div>
            <div className="card">
                <Link to='/Valeurs'>
                    <div className="thumb" >
                        <img className='image' src={logo}></img>
                    </div>
                    <article>
                        <h1>A venir</h1>
                    </article>
                </Link>
            </div>
        </div>
    )
}

export default About