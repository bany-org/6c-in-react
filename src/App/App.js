import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import Polski from './components/Polski/Polski';
import Matematyka from './components/Matematyka/Matematyka';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="App-sidebar">
                    <nav className="navigation">
                        <Link to="/" className="nav-item">
                            Home
                        </Link>
                        <Link to="/polski" className="nav-item">
                            Polski
                        </Link>
                        <Link to="/matematyka" className="nav-item">
                            Matematyka
                        </Link>
                        <Link to="/angielski" className="nav-item">
                            Angielski
                        </Link>
                    </nav>
                </div>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <div className="App-content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/polski">
                            <Polski />
                        </Route>
                        <Route path="/matematyka">
                            <Matematyka />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
