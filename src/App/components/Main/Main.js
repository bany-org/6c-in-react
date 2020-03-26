import React from 'react';
import { useEffect, useRef } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Home from '../Home/Home';
import Polski from '../Polski/Polski';
import Angielski from '../Angielski/Angielski';
import Matematyka from '../Matematyka/Matematyka';
import Informatyka from '../Informatyka/Informatyka';
import Historia from '../Historia/Historia';
import Muzyka from '../Muzyka/Muzyka';
import Biologia from '../Biologia/Biologia';
import Plastyka from '../Plastyka/Plastyka';
import Wf from '../Wf/Wf';
import Klasa2a from '../2a/Klasa2a';

import './Main.css';

const Main = () => {
    const { pathname } = useLocation();
    const main = useRef(null);

    useEffect(() => {
        main.current.scrollTop = 0;
    }, [pathname]);

    return (
        <div className="main" ref={main}>
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
                <Route path="2a">
                    <Klasa2a />
                </Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </div>
    );
};

export default Main;
