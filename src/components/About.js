import '../style/About.css'
import index from './img/index.jpeg'
function About() {

    return (
        <div class="band">
            <div class="item-1">
                <a href="" class="card">
                    <div class="thumb" >
                        <img className='image' src={index}></img>
                    </div>
                    <article>
                        <h1>Qui sommes-nous ? </h1>
                    </article>
                </a>
            </div>
            <div class="item-2">
                <a href="" class="card">
                    <div class="thumb" >
                    <img className='image' src={index}></img>
                    </div>
                    <article>
                        <h1>Les valeurs de l'Oasis du vert Marais</h1>
                    </article>
                </a>
            </div>
            <div class="item-3">
                <a href="" class="card">
                    <div class="thumb" ></div>
                    <article>
                        <h1>Created by You, July Edition</h1>
                    </article>
                </a>
            </div>
            <div class="item-4">
                <a href="" class="card">
                    <div class="thumb" ></div>
                    <article>
                        <h1>How to Code a Scrolling “Alien Lander” Website</h1>
                    </article>
                </a>
            </div>
            <div class="item-5">
                <a href="" class="card">
                    <div class="thumb" ></div>
                    <article>
                        <h1>How to Create a “Stranger Things” Text Effect in Adobe Photoshop</h1>
                    </article>
                </a>
            </div>
            <div class="item-6">
                <a href="" class="card">
                    <div class="thumb" ></div>
                    <article>
                        <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
                    </article>
                </a>
            </div>
            <div class="item-7">
                <a href="" class="card">
                    <div class="thumb" ></div>
                    <article>
                        <h1>Notes From Behind the Firewall: The State of Web Design in China</h1>
                    </article>
                </a>
            </div>
        </div>
    )
}

export default About