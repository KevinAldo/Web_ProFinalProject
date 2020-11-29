import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Home, Indonesia, Provinsi, World } from './component/pages';


const App = () =>{
    return(
        <Router>
            <div>
              <nav>
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
              </nav>
              <Switch>
                <Route path="/Home">
                  <Home />
                </Route>
                <Route path="/World">
                  <World />
                </Route>
                <Route path="/Indonesia">
                  <Indonesia />
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