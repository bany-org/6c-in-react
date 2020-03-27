import React from 'react';

import Info from '../Info/Info';
import LinkButton from '../LinkButton/LinkButton';

function Home() {
    return (
        <>
            <LinkButton
                link="https://bany-org.github.io/klasa6c/index.html"
                name="Poprzednia wersja strony"
            ></LinkButton>
            <Info>
                <b>BARDZO PROSZĘ CODZIENNIE ODŚWIEŻAĆ STRONĘ!</b>
            </Info>
        </>
    );
}

export default Home;
