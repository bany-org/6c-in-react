import React from 'react';

import './LinkButton.css';

const LinkButton = (props) => {
    return (
        <div>
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
            >
                {props.name || 'Link'}
            </a>
        </div>
    );
};

export default LinkButton;
