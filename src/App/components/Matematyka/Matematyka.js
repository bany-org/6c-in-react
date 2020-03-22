import React from 'react';
import './Matematyka.css';

import zad1 from './17032020-1.jpg';
import zad2 from './17032020-2.jpg';
import zad3 from './17032020-3.jpg';

import pdf1 from './zad2.pdf';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';

const Matematyka = () => {
    return (
        <div className="content">
            <Header subject="matematyka" teacher="" />
            <Lesson date="20.03.2020">
                <a href={pdf1} target="_blank" rel="noopener noreferrer">
                    plik.pdf
                </a>
            </Lesson>
            <Lesson date="17.03.2020">
                Zdjęcie poleceń: <br />
                <img src={zad1} alt="zadania" />
                <br />
                <img src={zad2} alt="zadania" />
                <br />
                <img src={zad3} alt="zadania" />
                <br />
            </Lesson>
        </div>
    );
};

export default Matematyka;
