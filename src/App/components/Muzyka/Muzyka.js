import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';

const Muzyka = () => {
    return (
        <div className="content">
            <Header subject="muzyka" teacher="" />

            <Lesson date="17.03.2020">
                Z muzyki trzeba wybrać z podręcznika dowolna piosenkę i
                przepisać tylko nuty do zeszytu
            </Lesson>
        </div>
    );
};

export default Muzyka;
