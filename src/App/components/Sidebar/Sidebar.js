import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

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
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50 50"
                        enable-background="new 0 0 50 50"
                        xml="preserve"
                    >
                        <path
                            fill="#FFFFFF"
                            d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"
                        />
                        <path
                            fill="#FFFFFF"
                            d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"
                        />
                        <path
                            fill="#FFFFFF"
                            d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"
                        />
                    </svg>
                </button>
            </div>
            <nav className={name}>
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
    );
};

export default Sidebar;
