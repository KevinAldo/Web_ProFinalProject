import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { Home, Indo, Provinsi, World } from './component/pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';

function App () {
    return(
        <Router>
            <div>
              <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">COVID-19 TRACKER</Navbar.Brand>
                <Nav className="ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/World">World</Nav.Link>
                  <Nav.Link href="/Indonesia">Indonesia</Nav.Link>
                  <Nav.Link href="/Provinsi">Provinsi</Nav.Link>
                </Nav>
              </Navbar>
              {/* <nav>
                  <ul>
                      <li>
                        <Link to="/Home">Home</Link>
                      </li>
                      <li>
                        <Link to="/World">World</Link>
                      </li>
                      <li>
                        <Link to="/Indonesia">Indonesia</Link>
                      </li>
                      <li>
                        <Link to="/Provinsi">Provinsi</Link>
                      </li>
                  </ul>
              </nav> */}
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/World">
                  <World />
                </Route>
                <Route path="/Indonesia">
                  <Indo />
                </Route>
                <Route path="/Provinsi">
                  <Provinsi />
                </Route>
               </Switch>
            </div>
        </Router>
    );
};

export default App;