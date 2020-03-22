import React from 'react';

import Lesson from '../Lesson/Lesson';
import Info from '../Info/Info';
import Header from '../Header/Header';

function Angielski() {
    return (
        <div className="content">
            <Header subject="język angielski" teacher="Patrycja Pytlik" />

            <Lesson date="20.03.2020">
                Dzień dobry Państwu, <br />
                oto dzisiejsza lekcja: <br />
                Temat: Cooking verbs, cooking nouns - revision. <br />
                Cel lekcji: znam i stosuje czasowniki i rzeczowniki związane z
                jedzeniem z lekcji 6.1 <br />
                Proszę powtórzyć słownictwo z podręcznika ze str. 81 tabelka
                zad. 3 i tabelka zad. 5. <br />
                Proszę zrobić w zeszycie zad. 3. <br />
                Pozdrawiam serdecznie, Patrycja Pytlik <br />
            </Lesson>
            <Lesson date="18.03.2020">
                Dzień dobry Państwu, dziś w planie znowu angielski! Mam
                nadzieję, że zrobienie wczorajszych zadań nie sprawiło dzieciom
                kłopotu. Jeśli ktoś jeszcze nie zdążył, można spokojnie
                nadrobić. Na pewno otrzymali Państwo wczoraj i przedwczoraj
                zagadnienia od kilku nauczycieli i póki się nie wdrożymy, będzie
                trochę gonienia na początku. <br />
                Moim celem jest przesyłanie 2, maksymalnie 3 rzeczy do
                zrobienia. <br />
                A zatem zadania na dziś! <br />
                Temat lekcji: A journey around the USA. <br />
                Cel lekcji: rozumiem tekst o Stanach Zjednoczonych Ameryki.{' '}
                <br />
                <a href="https://www.youtube.com/watch?v=98H5AN_vfOY">Link</a>
                <br />
                po obejrzeniu filmiku przechodzimy do podręcznika na str. 50 i
                51. <br />
                Proszę, aby uczniowie przeczytali tekst ze str. 50 i do zeszytu
                odpowiedzieli na pytania z ćw. 2 na str. 51. (nie trzeba
                przepisywać pytań :) <br />
                Dla chętnych zad. 4 str.51. Jest możliwość otrzymania oceny za
                to zadanie, trzeba je jednak napisać na komputerze i wysłać na
                mojego maila (ppytliksp5zabrze@gmail.com) w załączniku, do 23
                marca włącznie. <br />
                Pozdrawiam serdecznie, Patrycja Pytlik
            </Lesson>
            <Lesson date="17.03.2020">
                I teraz zadania na dziś. Tematy i zadania dzieci wpisują do
                zeszytu z j. angielskiego. <br />
                Topic: Where were you? Jak nie połamać języka? Cel lekcji:
                powtarzam czasownik "to be" w przeszłości i uczę się wymawiać
                nową głoskę <br />
                A. Obejrzyj film Arleny Witt z kanału Po cudzemu na YouTube:
                World, birthday, girl - jak nie połamać języka? | Po Cudzemu #25{' '}
                <br />
                <a
                    href="https://www.youtube.com/watch?v=3bDl8ageSzc&list=PLJ-cNWgEeSubipvRKLhNB5r2WEtm4254e&index=25"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LINK
                </a>
                <br />
                Twój cel: naucz się wymawiać poprawnie słowa: birthday, world,
                word oraz girl (po brytyjsku LUB amerykańsku). Poćwicz w domu
                omawianą głoskę. <br />
                B. Otwórz link z ćwiczeniami do zadań z was/ were, wasn't/
                weren't i na końcu sprawdź się sam! <br />
                <a
                    href="https://www.ang.pl/cwiczenia/799/past-simple-pytania-przeczenia"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Link
                </a>
                <br />
                Good luck! Pozdrowienia i dużo zdrowia dla całej rodziny,
                Patrycja Pytlik <br />
            </Lesson>
            <Info>
                Bardzo proszę: Wydrukować, zrobić zdjęcie lub poprosić dziecko o
                przepisanie zadań do lekcji z moich wiadomości. Wyznaczyć mu
                czas potrzebny do ich zrobienia: między 20 a 30 min. lub
                poprosić dziecko, aby samo wyznaczyło czas na pracę danego dnia
                z językiem angielskim. Po upływie tego czasu spytać, czy
                wszystko zrobiło/ powtórzyło/ obejrzało i czy wszystko ok. Moja
                prośba dotyczy nieblokowania zadań z dwóch czy trzech dni, bo
                wówczas pracy robi się 3x20 minut na raz i to jest dużo. Poza
                tym lepszy jest krótszy, a częstszy kontakt z językiem. Dlatego
                trzy razy w tygodniu będzie optymalnie!
            </Info>
        </div>
    );
}

export default Angielski;
