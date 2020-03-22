import React from 'react';
import { HashRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

import './App.css';

function App() {
    return (
        <HashRouter basename="/">
            <div className="App">
                <Sidebar />
                <Main />
            </div>
        </HashRouter>
    );
}

export default App;
