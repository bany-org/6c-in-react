import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';
import Info from '../Info/Info';

const Geografia = () => {
    return (
        <div className="content">
            <Header subject="geografia" teacher="Beata Halonowska" />
            <Lesson date="30.03.2020">
                Droga Młodzieży, najmądrzejsi tego świata słusznie nakazali
                wszystkim nam siedzieć grzecznie w domu (do czego, mam nadzieję,
                stosujecie się bez wyjątku! Wszak pierwszy raz w życiu najlepiej
                widzianym jest "nicnierobienie"). Niezawodna intuicja podpowiada
                mi jednak, że moja kochana młodzież cierpi z powodu braku
                możliwości wykazania się swoją niepomierną wiedzą na tematy
                wszechstronne - zwłaszcza zaś - te, związane z ulubioną
                geografii <br />
                Kochani na podstawie wiadomości z podręcznika Temat: WIELKIE
                MIASTA EUROPY: PARYŻ I LONDYN - proszę uzupełnijcie ćwiczenia.{' '}
                <br />
                Życzę przede wszystkim zdrowia. Pozdrawiam Beata Halinowska
            </Lesson>
        </div>
    );
};

export default Geografia;
