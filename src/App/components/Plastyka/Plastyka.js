import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';

const Plastyka = () => {
    return (
        <div className="content">
            <Header subject="plastyka" teacher="Sabina Borner" />
            <Lesson date="30.03.2020">
                Drodzy uczniowie, proszę zapisać temat w zeszycie do plastyki ,,
                Moda i proporcje sylwetki na przykładzie barokowej i rokokowej
                mody". Następnie przeczytać informacje z podręcznika ze strony
                94-103 oraz w paru zdaniach opisać styl ubierania się w tamtych
                czasach.
            </Lesson>
            <Lesson date="26.03.2020">
                Drodzy uczniowie, Proszę zapisać temat w zeszycie do plastyki
                ,,Jestem projektantem - mój styl". <br />
                Następnie zaprojektować dowolnie wybraną rzecz lub wiele rzeczy
                (np. samochód, ceramikę , ubrania, biżuterię torebki - do
                wyboru). Proszę o przysłanie zdjęć na adres mailowy . <br />
                sbornersp5zabrze@gmail.com <br />
                Prace zostana ocenione a oceny wpisane do Edu-dziennika.
                Pozdrawiam Sabina Borner
            </Lesson>
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
