import React from 'react';
import { Switch, Route, NavLink, Redirect, HashRouter } from 'react-router-dom';

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
    return (
        <HashRouter basename="/">
            <div className="App">
                <div className="App-sidebar">
                    <nav className="navigation">
                        <NavLink
                            exact
                            to="/"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/polski"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Polski
                        </NavLink>
                        <NavLink
                            to="/angielski"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Angielski
                        </NavLink>
                        <NavLink
                            to="/matematyka"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Matematyka
                        </NavLink>
                        <NavLink
                            to="/informatyka"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Informatyka i technika
                        </NavLink>
                        <NavLink
                            to="/historia"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Historia
                        </NavLink>
                        <NavLink
                            to="/muzyka"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Muzyka
                        </NavLink>
                        <NavLink
                            to="/biologia"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Biologia
                        </NavLink>
                        <NavLink
                            to="/plastyka"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Plastyka
                        </NavLink>
                        <NavLink
                            to="/wf"
                            className="nav-item"
                            activeClassName="selected"
                        >
                            Wf
                        </NavLink>
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
                        <Redirect to="/"></Redirect>
                    </Switch>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
