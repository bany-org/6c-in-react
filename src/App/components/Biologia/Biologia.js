import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';
import Info from '../Info/Info';
import LinkButton from '../LinkButton/LinkButton';

import karta1 from './karta1.pdf';

const Biologia = () => {
    return (
        <div className="content">
            <Header subject="biologia" teacher="" />
            <Info date="27.03.2020">
                Dzień dobry Na maila dostaniecie dzisiaj kartę pracy do
                rozwiązania. Karty pracy nie drukujemy!!! Wy tylko na nią
                "patrzycie" a odpowiedzi piszecie w programie Microsoft Word i
                same odpowiedzi mi odsyłacie. Przepraszam że tak piszę ale
                wczoraj miałam mnóstwo maili jak edytować kartę pracy??!! Ta
                karta pracy będzie oceniana. Nie robimy zdjęć!!! W razie pytań
                proszę pisać. Pozdrawiam serdecznie.
            </Info>
            <Lesson date="27.03.2020">
                Witam serdecznie. Przesyłam kartę pracy, całą wiadomość macie w
                dzienniku elektronicznym. Ostateczny termin przysyłania prac to
                01. 04. Małgorzata Krakowczyk
                <LinkButton link={karta1} name="karta pracy"></LinkButton>
            </Lesson>
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
