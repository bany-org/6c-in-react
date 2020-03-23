import React from 'react';
import { HashRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import './App.css';

function App() {
    return (
        <HashRouter basename="/">
            <ScrollToTop />
            <div className="App">
                <Sidebar />
                <Main />
            </div>
        </HashRouter>
    );
}

export default App;
