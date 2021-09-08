import logo from './img/logo.png'
import bannerImg from './img/banner.webp'
import "../style/Banner.css"

function Banner () {
    return(
        <div>
        <img src={logo} className='logo'></img>
        <img src={bannerImg} className='img'></img>
        
        </div>
    )
}

export default Banner