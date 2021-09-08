
import '../style/Calendar.css'
import '@natscale/react-calendar/dist/main.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState, useEffect, useCallback } from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const axios = require('axios')



axios.get('https://djangoeventsapi.herokuapp.com/api/events')
.then(function(response){
  console.log(response)
  
})

const Call = props => (
  <div className="calContainer">
    <Calendar
      localizer={localizer}
      events={[{title: 'jinane', start : new Date('2021-09-09T09:30:00'), end : new Date('2021-09-09T17:30:00'), allDay: false, ressource: {}}]}
      startAccessor="start"
      endAccessor="end"
      />
  </div>
)
export default Call