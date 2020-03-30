import React from 'react';

import Info from '../Info/Info';
import LinkButton from '../LinkButton/LinkButton';

function Home() {
    return (
        <>
            <Info date="30.03.2020">
                Z uwagi na nikłe zainteresowanie stroną, będzie ona
                aktualizowana raz dziennie w godzinach popołudniowych.
            </Info>
            <Info>
                <b>BARDZO PROSZĘ CODZIENNIE ODŚWIEŻAĆ STRONĘ!</b>
                <LinkButton
                    link="https://bany-org.github.io/klasa6c/index.html"
                    name="Poprzednia wersja strony"
                ></LinkButton>
            </Info>
        </>
    );
}

export default Home;
