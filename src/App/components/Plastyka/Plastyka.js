import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';

const Plastyka = () => {
    return (
        <div className="content">
            <Header subject="plastyka" teacher="Sabina Borner" />

            <Lesson date="20.03.2020">
                Drodzy uczniowie, proszę zapisać temat w zeszycie ,,Język mody
                językiem porozumienia między ludźmi" Następnie proszę
                zaprojektować ubrania, buty, torebki , czapki itp. do wyboru
                (jesteście projektantami mody) na kartce z bloku. Można rónież
                wykorzystać kolorowy papier, wycinki z kolorowych czasopism
                Pozdrawiam Sabina Borner
            </Lesson>
        </div>
    );
};

export default Plastyka;
