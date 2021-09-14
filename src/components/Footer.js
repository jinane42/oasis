import '../style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const fb = <FontAwesomeIcon icon={faFacebook} />
const insta = <FontAwesomeIcon icon={faInstagram} />

function Footer () {
    return(
        <div className='footer'>
           <div className='newsletter'>
               <p>Tu ne reçoit pas encore nos emails ?? Inscris-toi vite pour être tenu au courant de toutes nos activités</p>
               <form className='newsForm'>
                   <input placeholder='jonhdoe@gmail.com'></input>
                   <button type='submit'>Envoyer</button>
               </form>
           </div>
           <div className='socials'>
               <p>Suis-nous sur les réseaux </p>
               <ul>
                   <li>{fb}</li>
                   <li>{insta}</li>
               </ul>
           </div>

        </div>
    )
}

export default Footer