import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';

const Wf = () => {
    return (
        <div className="content">
            <Header subject="wf" teacher="Janusz Zieliński" />

            <Lesson date="20.03.2020">
                Szanowni Państwo Opierając się na wskazaniach lekarzy oraz
                oczywiście władz oświatowych ruch i sprawność fizyczna jest dla
                zdrowia dzieci, młodzieży i dorosłych niezwykle ważna. Nie można
                ćwiczyć na sali gimnastycznej ale za to można poćwiczyć w domu.
                Ciekawą formą, moim zdaniem jest zabawa do której przysyłam
                Państwu link. Dzieci mogą ćwiczyć same, z rodzeństwem albo z
                dorosłymi. Zachęcam do wspólnej zabawy, a endorfiny wytwarzające
                się w czasie ćwiczeń fizycznych wpłyną na poprawę nastroju a tym
                samym będą wspierać utrzymanie zdrowia. Jest to także fajny
                sposób na "nudę". Ćwiczymy codziennie przez cały tydzień. <br />
                <a
                    href="https://wordwall.net/pl/resource/893767/wychowanie-fizyczne/wf-online-w-domu-%C4%87wiczenia"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Link
                </a>{' '}
                <br />
                pozdrawiam Janusz Zieliński
            </Lesson>
        </div>
    );
};

export default Wf;
