import React, { useEffect } from 'react';

import Lesson from '../Lesson/Lesson';
import Info from '../Info/Info';
import Header from '../Header/Header';

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

function Polski() {
    return (
        <div className="content">
            <ScrollToTopOnMount />
            <Header subject="język polski" teacher="Bożena Nowakowska" />
            <Info date="25.03.2020">
                Dzień dobry, Dziękuję za przesłane prace. Oceny, jeśli będzie
                można, wpiszę do e-dziennika. Jeśli jeszcze ktoś nie przesłał
                dedykacji, proszę przesłać w dokumencie tekstowym Open Office.
                Pozdrawiam.
            </Info>
            <Lesson date="23.03.2020">
                Dzień dobry, Mam nadzieję, że bez problemu poradziliście sobie z
                krótką formą wypowiedzi, jaką jest dedykacja. Myślę, że
                niejednokrotnie pisaliście dedykacje swoim najbliższym,
                koleżankom i kolegom. Proszę napisać w dokumencie tekstowym Open
                Office i przesłać mi na maila 2 dedykacje . Napisz dedykacje,
                które napisałbyś w książkach, które ofiarujesz w prezencie: a.
                bliskiej koleżance lub bliskiemu koledze: b.nauczycielowi,
                wychowawcy, księdzu lub trenerowi Postępuj według planu ze s.226
                -podręcznik Praca na czwartek 26 marca. Pozdrawiam.
            </Lesson>
            <Info>
                <em>
                    Dzień dobry, Kochani, na wstępie jeszcze raz chcę wyjaśnić
                    zasady pracy, bo możliwe, że się do końca nie zrozumieliśmy.
                    Zapisujecie temat i ćwiczenia, które zadaję w zeszycie, ale
                    nie wysyłacie mi tego. Wierzę, bo jesteście odpowiedzialni,
                    że wykonujecie wszystko. My to wszystko sprawdzimy w szkole
                    po powrocie. Jeżeli zadam dłuższą pracę pisemną list, opis,
                    opowiadanie, to wtedy piszecie to- nie w zeszycie, a w
                    dokumencie tekstowym - Word, Open Office i wysyłacie mi ma
                    maila jako załącznik. Pozdrawiam.
                </em>
            </Info>

            <Lesson date="19.03.2020">
                Kochani, na wstępie jeśli ktoś jest chętny i chce napisać
                wypracowanie zadane we wtorek (ćwiczenie 6 strona220) to
                zapisuje je w dokumencie tekstowym - Open Office, Word. To co
                zapisujecie w zeszytach, nie wysyłacie. Dzisiejszy temat: Jak
                napisać dedykację? <br />
                1. Przepisz definicję dedykacji i plan dedykacji do zeszytu z
                podręcznika - strona 225-226. <br />
                2. Zapoznaj się z wzorem dedykacji i przepisz 1 przykład do
                zeszytu- strona 226 podręcznik <br />
                3. Wykonaj ćwiczenia w zeszycie ćwiczeń 92,93,94,95 strona 53
                zeszyt ćwiczeń Z dzisiejszej lekcji nic mi nie wysyłacie. <br />
                Pozdrawiam. Trzymajcie się cieplutko. Dbajcie o siebie. Bożena
                Nowakowska
            </Lesson>
            <Lesson date="18.03.2020">
                Temat:Bibliofil w pizzerii.
                <ol>
                    <li>
                        Przeczytaj fragment utworu M. Musierowicz "Język Trolli"
                        - podręcznik strona - 221-224
                    </li>
                    <li>
                        Wyjaśnij , znaczenie słów: bibliofil, barbarzyństwo,
                        barbarzyńca - sprawdż w słowniku, wyjaśnienie słowa
                        bibliofil - podręcznik strona 226
                    </li>
                    <li>
                        Napisz plan zdarzeń w formie równoważników zdań -
                        pisemnie w zeszycie
                    </li>
                    <li>
                        Opowiedz ustnie w narracji pierwszoosobowej o
                        zdarzaniach w pizzerii z punktu widzenia jednej z
                        wymienionych osób: dziadka, Józinka, właściciela
                        pizzerii, innych klientów
                    </li>
                    <li>
                        Odpowiedz pisemnie na pytanie - Jaka sytuacja wywołała
                        oburzenie,gniew, co było barbarzyństwem w oczach
                        dziadka? Czy podzielasz jego opinię? Dlaczego? Tyle na
                        dzisiaj. Jeżeli macie jakieś problemy, to proszę
                        napisać. Pamiętajcie o czytaniu lektury- termin
                        4.05.2020. Spokojnie pracujcie. Pozdrawiam. Do piątku.
                    </li>
                </ol>
            </Lesson>
            <Lesson date="17.03.2020">
                Zdjęcie poleceń: Dzień dobry, zaczynamy. <br />
                Zapisujcie wszystko w zeszytach przedmiotowych. Będzie dobrze.
                Pracujcie spokojnie, bez pośpiechu. <br />
                Temat: Niezawodny sposób na słotę,
                <ol>
                    <li>
                        Przeczytaj utwór ' Na słotę" S. Grochowiaka - podręcznik
                        , strona 220
                    </li>
                    <li>
                        Odpowiedz pisemnie pełnymi zdaniami na pytania 1,2 na
                        stronie 2203
                    </li>
                    <li>
                        Przed przystąpieniem do zadania 3 przypomnij sobie co to
                        jest : wers , rymy, jakie są rodzaje rymów, anafora,
                        przenośnia. Następnie odpowiedz na zadanie 3 - jaką
                        budowę ma utwór- ile jest wersów, wypisz anaforę i
                        odpowiedz jaką funkcję pełni ten środek artystyczny w
                        utworze, zaznacz i nazwij rodzaj rymów. Nie ucz się
                        wiersza na pamięć.{' '}
                    </li>
                    <li>Zadanie 5 strona 220. </li>
                    <li>
                        Dla chętnych - zadanie 6 strona 220. Napisz w zeszycie
                        lub wyślij jako załącznik na mojego maila- adres podałam
                        wczoraj. Praca - 2 strony. Sprawdzę i ocenię. Prace
                        można przesyłać do poniedziałku 23 marca. Tyle na
                        dzisiaj. Serdecznie pozdrawiam. Bożena Nowakowska.
                    </li>
                </ol>
            </Lesson>

            <Info>
                Drodzy Rodzice, w związku z zawieszeniem zajęć lekcyjnych od
                dnia dzisiejszego do 25 marca nauka będzie odbywała się zdalnie.{' '}
                <br />
                Proszę o monitorowanie wiadomości w e-dzienniku, w których będę
                przesyłała Państwa dzieciom zagadnienia do samodzielnej
                realizacji w domu. <br />
                Niestety nasz e- dziennik nie posiada funkcji przesyłania
                załączników, dlatego wszelkie dodatkowe materiały - karty pracy,
                testy do lektury- znajdziecie Państwo w swoich skrzynkach
                mailowych. <br />
                W przypadku pytań i wątpliwości proszę o kontakt mailowy -
                bhajdowskasp5zabrze@gmail.com <br />
                Pozdrawiam Państwa serdecznie - Bożena Nowakowska <br />
                Drodzy Uczniowie, oto kilka zasad dotyczących nauki języka
                polskiego w domu: - zaplanujcie sobie codziennie, najlepiej
                przed południem, kilka godzin na pracę ( to nie tylko język
                polski) - zadania z języka polskiego będą pojawiały się 2-3 razy
                w tygodniu - wysyłane lekcje będą zawierały zawsze temat oraz
                zadania do wykonania - wszystko zapisujcie w zeszytach do języka
                polskiego lub w ćwiczeniach - dłuższe prace pisemne piszcie w
                zeszytach lub jeśli o to poproszę - wyślijcie na mojego maila (
                załącznik) - jeżeli macie możliwość drukujcie dodatkowe
                materiały, które również będę wysyłała na pocztę Rodziców
                Kochane Dzieci, wykorzystajcie ten czas na naukę, na nadrobienie
                zaległości lekturowych, na gry planszowe i wspólny czas z
                Rodziną. Zostańcie w domu. Serdecznie pozdrawiam - Bożena
                Nowakowska
            </Info>
        </div>
    );
}

export default Polski;
