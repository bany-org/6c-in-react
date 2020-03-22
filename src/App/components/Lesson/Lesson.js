import React from 'react';
import './Lesson.css';

const Lesson = (props) => {
    return (
        <div className="lesson">
            <b>Z dnia: {props.date}</b>
            <div className="lesson-content">{props.children}</div>
        </div>
    );
};

export default Lesson;
