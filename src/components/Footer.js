import '../style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const fb = <FontAwesomeIcon icon={faFacebook} />
const insta = <FontAwesomeIcon icon={faInstagram} />

function Footer () {
    return(
        <div className='footer'>
           <div className='newsletter'>
               <p>Tu ne reçoit pas encore nos emails 🧐 ?!</p>
               <p>Inscris-toi vite pour être tenu au courant de toutes nos activités ⬇️</p>
               <form className='newsForm'>
                   <input placeholder='jonhdoe@gmail.com'></input>
                   <button className='footerbtn' type='submit'>Envoyer</button>
               </form>
           </div>
           <div className='socials'>
               <p>Suis-nous sur les réseaux 👀 </p>
               <ul>
                   <li><a href='https://www.facebook.com/LOasis-du-Vert-Marais-646598649111599/'>{fb}</a></li>
                   <li><a href='https://www.instagram.com/oasis_vertmarais/'>{insta}</a></li>
               </ul>
           </div>

        </div>
    )
}

export default Footer