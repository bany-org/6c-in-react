import React from 'react';
import './Info.css';

const Info = (props) => {
    return (
        <div className="info">
            {props.date && <b>Z dnia: {props.date}</b>}
            <div className="info-content">{props.children}</div>
        </div>
    );
};

export default Info;
