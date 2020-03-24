import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';
import LinkButton from '../LinkButton/LinkButton';

const Informatyka = () => {
    return (
        <div className="content">
            <Header subject="informatyka" teacher="" />
            <Lesson date="17.03.2020">
                Drodzy Uczniowie. Proszę, abyście przygotowali tło
                przedstawiające plażę do animacji w programie Pivot Animator.
                Stwórz animację osoby chodzącej po plaży. Stworzoną animację
                zapisz na pulpicie lub na pendrive - będzie oceniany. <br />
                Aby wczytać tło należy: <br />
                wybrany obraz zapisać na pulpicie <br />
                w Pivocie - Plik - Wczytaj obraz Sprite <br />
                Pozdrawiam i życzę Zdrówka <br />
                <LinkButton
                    link="https://kepke6.wixsite.com/kwarantanna/klas-6"
                    name="Otwórz"
                ></LinkButton>
            </Lesson>
        </div>
    );
};

export default Informatyka;
