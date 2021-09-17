import React, {useState, useEffect} from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './components/About'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Calendar from './components/Calendar'
import Login from './components/Login';
import CreateEvent from './components/CreateEvent';
import Valeurs from './components/articles/Valeurs';
import Actions from './components/articles/Actions';
import Fondements from './components/articles/Fondements';
import QuiSommesNous from './components/articles/QuisommesNous';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {

  const [event, setEvent] = useState([])
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth_token') !== null) {
        setIsAuth(true);
    }
}, []);

  return (
    <div className="App">

      <Router>

        <Banner />
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>

        <Switch>
          <Route exact path="/about" component={() => <About />} ></Route>
          <Route exact path="/Events" component={() => <Events event={event} setEvent={setEvent}/>}></Route>
          <Route exact path="/CreateEvent" component={() => <CreateEvent event={event} setEvent={setEvent}/>}></Route>
          <Route exact path="/gallery" component={() => <Gallery />}></Route>
          <Route exact path="/calendar" component={() => <Calendar />}></Route>
          <Route exact path="/login" component={() => <Login isAuth={isAuth} setIsAuth={setIsAuth}/>}></Route>
          <Route exact path="/Valeurs" component={() => <Valeurs/>}></Route>
          <Route exact path="/Fondements" component={() => <Fondements/>}></Route>
          <Route exact path="/Qui-sommes-nous" component={() => <QuiSommesNous/>}></Route>
          <Route exact path="/Actions" component={() => <Actions/>}></Route>
          
        </Switch>

        <Footer />


      </Router>
    </div>
  );
}

export default App;
