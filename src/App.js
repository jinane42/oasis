import React, {useState} from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './components/About'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Calendar from './components/Calendar'
import Login from './components/Login';
import CreateEvent from './components/CreateEvent';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {

  const [event, setEvent] = useState([])
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">

      <Router>

        <Banner />
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>

        <Switch>
          <Route exact path="/about" component={() => <About />}></Route>
          <Route exact path="/Events" component={() => <Events event={event} setEvent={setEvent}/>}></Route>
          <Route exact path="/CreateEvent" component={() => <CreateEvent event={event} setEvent={setEvent}/>}></Route>
          <Route exact path="/gallery" component={() => <Gallery />}></Route>
          <Route exact path="/calendar" component={() => <Calendar />}></Route>
          <Route exact path="/login" component={() => <Login isAuth={isAuth} setIsAuth={setIsAuth}/>}></Route>
        </Switch>

        <Footer />


      </Router>
    </div>
  );
}

export default App;
