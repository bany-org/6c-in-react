import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import Polski from './components/Polski/Polski';
import Angielski from './components/Angielski/Angielski';
import Matematyka from './components/Matematyka/Matematyka';
import Informatyka from './components/Informatyka/Informatyka';
import Historia from './components/Historia/Historia';
import Muzyka from './components/Muzyka/Muzyka';
import Biologia from './components/Biologia/Biologia';
import Plastyka from './components/Plastyka/Plastyka';
import Wf from './components/Wf/Wf';

function App() {
    console.log('param');
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
                        <Link to="/angielski" className="nav-item">
                            Angielski
                        </Link>
                        <Link to="/matematyka" className="nav-item">
                            Matematyka
                        </Link>
                        <Link to="/informatyka" className="nav-item">
                            Informatyka i technika
                        </Link>
                        <Link to="/historia" className="nav-item">
                            Historia
                        </Link>
                        <Link to="/muzyka" className="nav-item">
                            Muzyka
                        </Link>
                        <Link to="/biologia" className="nav-item">
                            Biologia
                        </Link>
                        <Link to="/plastyka" className="nav-item">
                            Plastyka
                        </Link>
                        <Link to="/wf" className="nav-item">
                            Wf
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
                        <Route path="/angielski">
                            <Angielski />
                        </Route>
                        <Route path="/matematyka">
                            <Matematyka />
                        </Route>
                        <Route path="/informatyka">
                            <Informatyka />
                        </Route>
                        <Route path="/historia">
                            <Historia />
                        </Route>
                        <Route path="/muzyka">
                            <Muzyka />
                        </Route>
                        <Route path="/biologia">
                            <Biologia />
                        </Route>
                        <Route path="/plastyka">
                            <Plastyka />
                        </Route>
                        <Route path="/wf">
                            <Wf />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
