import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';

const Biologia = () => {
    return (
        <div className="content">
            <Header subject="biologia" teacher="" />

            <Lesson date="19.03.2020">
                Witam wszystkich bardzo serdecznie Na dzienniku elektronicznym
                macie wpisane oceny z kartkówki - Ryby. Jeśli ktoś nie pisał lub
                dostał ocenę niedostateczną utrwala materiał. Przypominam
                uczycie się intensywnie na kartkówkę z płazów. Nie wiem w jakiej
                formie ją napiszecie ale na pewno będzie. W przyszłym tygodniu
                dostaniecie karty pracy do uzupełnienia będziecie musieli je do
                mnie odesłać do sprawdzenia. Pozdrawiam serdecznie i życzę dużo
                zdrówka. W razie pytań piszcie. Proszę przekazujcie sobie
                informacje szczególnie tym osobom które nie mają dziennika
                elektronicznego
            </Lesson>
        </div>
    );
};

export default Biologia;
