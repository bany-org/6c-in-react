import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';
import LinkButton from '../LinkButton/LinkButton';

const Muzyka = () => {
    return (
        <div className="content">
            <Header subject="muzyka" teacher="" />
            <Lesson date="26.03.2020">
                Drodzy uczniowie , proszę poszukać na youtube utworu ,,Wiosna
                ach to ty" M. Grechuty i sobie przesłuchać wraz z tekstem z
                podręcznika do muzyki. <br />
                <LinkButton link="https://www.youtube.com/watch?v=3NQnnhlRWmc"></LinkButton>
                Pozdrawiam Sabina Borner
            </Lesson>
            <Lesson date="17.03.2020">
                Z muzyki trzeba wybrać z podręcznika dowolna piosenkę i
                przepisać tylko nuty do zeszytu
            </Lesson>
        </div>
    );
};

export default Muzyka;
