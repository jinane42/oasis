import React, { useState, useEffect } from 'react'

export default function CreateEvent({ event, setEvent }) {

    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [description, setDescription] = useState('')

    const addEvent = e => {
        e.preventDefault();

        const newEvent = {
            category: category,
            name: name,
            price: price,
            start_date: start_date,
            end_date: end_date,
            description: description
        };

        fetch('https://djangoeventsapi.herokuapp.com/api/events/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                event.push(newEvent)
                console.log(event)
            }
            );
    };

    return (
        <div className='container-event'>
            <form action="#" method="post" id="event_form" onSubmit={addEvent}>
                <div class="name">
                    <label for="name"></label>
                    <input type="text" placeholder="Nom de l'évènement" name="name" id="name_input"
                        onChange={e => setName(e.target.value)}
                        required></input>
                </div>
                <div class="price">
                    <label for="price"></label>
                    <input type="text" placeholder="Prix" name="price" id="price_input"
                        onChange={e => setPrice(e.target.value)}
                        required></input>
                </div>
                <div class="start_date">
                    <label for="start_date" className='date'>Date de début</label>
                    <input type="date" placeholder="Date de début" name="start_date" id="start_date"
                        onChange={e => setStart_date(e.target.value)}
                        required></input>
                </div>
                <div class="end_date">
                    <label for="end_date" className='date'>Date de fin</label>
                    <input type="date" placeholder="Date de fin" name="end_date" id="end_date"
                        onChange={e => setEnd_date(e.target.value)}
                        required></input>
                </div>
                <div class="category">
                    <label for="category"></label>
                    <select placeholder="Catégorie" name="category" id="category_input"
                        onChange={e => setCategory(e.target.value)}
                        required>
                        <option disabled hidden selected>Catégorie:</option>
                        <option>Workshop</option>
                        <option>Concert</option>
                        <option>Food</option>
                    </select>
                </div>
                <div class="description">
                    <label for="description"></label>
                    <textarea name="description" placeholder="Description " id="description_input" cols="30" rows="5"
                        onChange={e => setDescription(e.target.value)}
                        required></textarea>
                </div>
                <div class="submit">
                    <input type="submit" value="Enregistrer" id="form_button" ></input>
                </div>
            </form>
        </div>
    )
}
