import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';
import LinkButton from '../LinkButton/LinkButton';

const Wf = () => {
    return (
        <div className="content">
            <Header subject="wf" teacher="Janusz Zieliński" />
            <Lesson date="30.03.2020">
                Dzień dobry Rozpoczynamy tydzień. Mam nadzieję, że wszyscy
                jesteście zdrowi i w dobrym humorze. Dobre samopoczucie poprawia
                ruch dlatego proszę o systematyczne ćwiczenia. Jeśli poprawi się
                pogoda można otworzyć okno lub wyjść na balkon. W dniu
                dzisiejszym wystawię zaległe oceny za systematyczność w lutym.
                Przesłane ćwiczenia wykonujcie przez cały tydzień w czasie tej
                aktywności poproście o zrobienie Wam zdjęcia lub zdjęć i
                prześlijcie je na mój adres e-mail
                jzielinskisp5zabrze@gmail.com. Zdjęcia będą ocenione.
                Przypominam o terminie nadsyłania zdjęć. pozdrawiam Janusz
                Zieliński
            </Lesson>
            <Lesson date="27.03.2020">
                Witam Państwa Mija już półtora tygodnia naszej nauki przez
                internet - uczymy się wszyscy Państwo, dzieci i my. Mam
                nadzieję, że wspólnie damy radę, a dzieci odniosą z nauczania
                online korzyści i opanują to co znajduje się w podstawie
                programowej. Będę się starał przesyłać ciekawe ćwiczenia,
                proponować ciekawe metody, rozbudzić zainteresowania sportem i
                zdrowym stylem życia. Ewentualne prace teoretyczne, bardzo
                proszę zachować w domu, bo będą potrzebne do prezentacji i
                eksponowania w szkole, kiedy już szczęśliwie do niej wrócimy.
                Nowe zadania będę przesyłał na każdej pierwszej lekcji wf-u na
                początku każdego tygodnia. Na prace teoretyczne dzieci będą
                miały 2 tygodnie czasu. Chciałbym jednak prosić o przesyłanie
                zdjęć lub krótkich filmików na bieżąco, bo nie wymagają one
                wiele pracy. jako pierwsze zadanie proszę o przesłanie mi
                zdjęcia lub zdjęć z ćwiczeń zadanych ostatnio. Jestem bardzo
                ciekawy jak dzieci radzą sobie. Proszę o przesłanie ich
                najpóźniej do Świąt na mój adres e-mail
                jzielinskisp5zabrze@gmail.com. Wszystkie zdjęcia zostaną
                ocenione z aktywności na lekcji wf-u. serdecznie pozdrawiam
                Janusz Zieliński
            </Lesson>
            <Lesson date="26.03.2020">
                Szanowni Rodzice, drodzy Uczniowie Rozpoczynamy zdalne
                nauczanie. tak jak w ubiegłym tygodniu będę proponował zestawy
                ćwiczeń do wykonywania w domu przez okres tygodnia, nawet wtedy
                kiedy mamy lekcji w-f - bo nie możemy przecież wychodzić z domu:
                spacerować, biegać, grać w piłkę a ruch to zdrowie. w czasie
                planowanych godzin w-f czekam na kontakt e-mailowy
                jzielinskisp5zabrze@gmail.com prze Dziennik elektroniczny lub na
                messengerze jeżeli zaistnieje taka potrzeba. Przesyłam Państwu
                link do strony
                <LinkButton
                    link="https://damianrudnik.com/lekcja-wf-w-domu-zagraj-i-cwicz-podstawowka-i-liceum/"
                    name="Ćwiczenia"
                ></LinkButton>
                dla dzieci gdzie trener LA i nauczyciel w-f pokazuje rozgrzewkę
                następnie 3 gry z ćwiczeniami w których mogą zagrać Państwa
                dzieci same z rodzeństwem lub nawet z Rodzicami. życzę miłej
                zabawy pozdrawiam Janusz Zieliński
            </Lesson>
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
                sposób na "nudę". Ćwiczymy codziennie przez cały tydzień.
                <LinkButton
                    link="https://wordwall.net/pl/resource/893767/wychowanie-fizyczne/wf-online-w-domu-%C4%87wiczenia"
                    name="Koło fortuny"
                ></LinkButton>
                pozdrawiam Janusz Zieliński
            </Lesson>
        </div>
    );
};

export default Wf;
