import React from 'react';
import './Matematyka.css';

import pdf1 from './zad1.pdf';
import pdf2 from './zad2.pdf';
import pdf3 from './zad3.pdf';
import pdf4 from './zad4.pdf';
import pdf5 from './zad5.pdf';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';
import LinkButton from '../LinkButton/LinkButton';

const Matematyka = () => {
    return (
        <div className="content">
            <Header subject="matematyka" teacher="" />
            <Lesson date="27.03.2020">
                <LinkButton link={pdf5} name="Plik pdf"></LinkButton>
            </Lesson>
            <Lesson date="26.03.2020">
                <LinkButton link={pdf4} name="Plik pdf"></LinkButton>
            </Lesson>
            <Lesson date="24.03.2020">
                <LinkButton link={pdf3} name="Plik pdf"></LinkButton>
            </Lesson>
            <Lesson date="20.03.2020">
                <LinkButton link={pdf2} name="Plik pdf"></LinkButton>
            </Lesson>
            <Lesson date="17.03.2020">
                <LinkButton link={pdf1} name="Plik pdf"></LinkButton>
            </Lesson>
        </div>
    );
};

export default Matematyka;
