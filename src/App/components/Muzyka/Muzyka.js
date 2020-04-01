import React from 'react';

import Lesson from '../Lesson/Lesson';
import Header from '../Header/Header';
import LinkButton from '../LinkButton/LinkButton';

const Muzyka = () => {
    return (
        <div className="content">
            <Header subject="muzyka" teacher="" />
            <Lesson date="01.04.2020">
                Drodzy uczniowie , proszę zapisać w zeszycie do muzyki temat
                ,,Muzyczne dzieło sztuki" . Następnie proszę przeczytać
                informacje z podręcznika do muzyki ze str. 93-94 <br />
                oraz
                <LinkButton
                    link="https://epodreczniki.pl/a/warszawska-jesien-w-srodku-lata/D1TNcOHlN"
                    name="link"
                ></LinkButton>
                Proszę zapisać w zeszycie notatkę na temat Warszawskiej Jesieni?
                <br />
                Proszę nauczyć się piosenki ,,Orkiestry dęte" , nagrać swój
                śpiew na telefonie i przesłać na adres mailowy <br />
                sbornersp5zabrze@gmail.com <br />
                Śpiewanie zostanie ocenione a oceny wpisane do Edu-dziennika
                <br />
                Pozdrawiam Sabina Borner
            </Lesson>
            <Lesson date="26.03.2020">
                Drodzy uczniowie , proszę poszukać na youtube utworu ,,Wiosna
                ach to ty" M. Grechuty i sobie przesłuchać wraz z tekstem z
                podręcznika do muzyki. <br />
                <LinkButton link="https://www.youtube.com/watch?v=3NQnnhlRWmc"></LinkButton>
                Pozdrawiam Sabina Borner
            </Lesson>
            <Lesson date="17.03.2020">
                Z muzyki trzeba wybrać z podręcznika dowolna piosenkę i
                przepisać tylko nuty do zeszytu
            </Lesson>
        </div>
    );
};

export default Muzyka;
