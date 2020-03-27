import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <h2>{props.subject}</h2>
            {props.teacher && <div className="teacher">{props.teacher}</div>}
        </div>
    );
};

export default Header;
