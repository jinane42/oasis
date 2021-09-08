import Banner from './components/Banner'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Calendar from './components/Calendar'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>

        <Banner />
        <Navbar />

        <Switch>
          <Route exact path="/about" component={() => <About />}></Route>
          <Route exact path="/Events" component={() => <Events />}></Route>
          <Route exact path="/gallery" component={() => <Gallery />}></Route>
          <Route exact path="/calendar" component={() => <Calendar />}></Route>
        </Switch>

        <Footer />


      </Router>
    </div>
  );
}

export default App;
