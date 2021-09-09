import React, { useState, useEffect, Component } from 'react';
import '../style/Calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


const localizer = momentLocalizer(moment)
const axios = require('axios')


class Cal extends React.Component {

  constructor(props) {
    super(props)    
    this.state = {
      cal_events: [],
    }
  }


  convertDate = (date) => {
    return moment.utc(date).toDate()
  }

  componentDidMount() {

    axios.get('https://djangoeventsapi.herokuapp.com/api/events/')
      .then(response => {
        console.log(response.data)
        let eventArray =  []
        let appointments = response.data;
        
        appointments.forEach(element => {
          let newEvent = {title: element.name, start: new Date(element.start_date), end: new Date(element.end_date), allDay: false, ressource: 'any'}
          eventArray.push(newEvent)
        });

        console.log(appointments)
        this.setState({
          cal_events: eventArray
        })
      })
      .catch(function (error) {
        console.log(error);
      })
    
  }



  render() {

    const { cal_events } = this.state
    console.log(cal_events)

    return (
      <div className="calContainer">
        <Calendar
          localizer={localizer}
          events={cal_events}
          startAccessor="start"
          endAccessor="end"

        />
      </div>
    )
  }

}
export default Cal;
