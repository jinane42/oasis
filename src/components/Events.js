import { useState, useEffect } from 'react' 
import '../style/Events.css'

function Events({ event, setEvent}) {

    return (
        <div className='container-event'>
            <h2>Envie de venir te ressourcer l'espace d'une journée ou peut-être même plus ? <br></br> Tu es au bon endroit !</h2>
            <h3>Check notre calendrier pour avoir une vue d'ensemble sur les activités à venir.</h3>
            <h3>Pour t'inscrire rempli le formulaire ci-dessous en sélectionant le chantier auquel tu veux participer.</h3>

            <form action="#" method="post" id="contact_form">
                <div className="name">
                    <label for="name"></label>
                    <input type="text" placeholder="Mon nom" name="name" id="name_input" required></input>
                </div>
                <div className="email">
                    <label for="email"></label>
                    <input type="email" placeholder="Mon adresse e-mail" name="email" id="email_input" required></input>
                </div>
                <div className="telephone">
                    <label for="name"></label>
                    <input type="text" placeholder="Mon numéro" name="telephone" id="telephone_input" required></input>
                </div>
                <div className="subject">
                    <label for="subject"></label>
                    <select placeholder="Je souhaite participer à l'évènement suivant:" name="subject" id="subject_input" required>
                        <option disabled hidden selected>Je souhaite participer à l'évènement suivant:</option>
                        <option>I'd like to start a project</option>
                        <option>I'd like to ask a question</option>
                        <option>I'd like to make a proposal</option>
                    </select>
                </div>
                <div className="people">
                    <label for="people"></label>
                    <select placeholder="Nombre de personnes:" name="people" id="people_input" required>
                        <option disabled hidden selected>Nombre de personnes:</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="message">
                    <label for="message"></label>
                    <textarea name="message" placeholder="Une question ou un petit mot ? " id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div className="submit">
                    <input type="submit" value="Je participe !" id="form_button" ></input>
                </div>
            </form>
        </div>

    )
}

export default Events