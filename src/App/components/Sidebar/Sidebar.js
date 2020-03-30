import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import HamburgerIcon from '../../Assets/HamburgerIcon/HamburgerIcon';

import './Sidebar.css';

const config = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/polski',
        name: 'Polski'
    },
    {
        path: '/angielski',
        name: 'Angielski'
    },
    {
        path: '/matematyka',
        name: 'Matematyka'
    },
    {
        path: '/informatyka',
        name: 'Informatyka'
    },
    {
        path: '/historia',
        name: 'Historia'
    },
    {
        path: '/geografia',
        name: 'Geografia'
    },
    {
        path: '/muzyka',
        name: 'Muzyka'
    },
    {
        path: '/biologia',
        name: 'Biologia'
    },
    {
        path: '/plastyka',
        name: 'Plastyka'
    },
    {
        path: '/wf',
        name: 'Wf'
    },
    {
        path: '/klasa2a',
        name: 'Klasa 2a'
    }
];

const Sidebar = () => {
    const [isOpen, toggleOpen] = useState(true);

    function handleClick() {
        return toggleOpen(!isOpen);
    }

    const name = isOpen ? 'navigation closed' : 'navigation';

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <button
                    id="hamburgerButton"
                    type="button"
                    onClick={handleClick}
                >
                    <HamburgerIcon />
                </button>
            </div>
            <nav className={name}>
                {config.map((elem) => {
                    return (
                        <NavLink
                            exact
                            to={elem.path}
                            className="nav-item"
                            activeClassName="selected"
                            key={elem.name}
                        >
                            {elem.name}
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
