import React from 'react';

import LinkButton from '../LinkButton/LinkButton';

function Home() {
    return (
        <>
            <LinkButton
                link="https://bany-org.github.io/klasa6c/index.html"
                name="Poprzednia wersja strony"
            ></LinkButton>
            {/* <a
                href="https://bany-org.github.io/klasa6c/index.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                Poprzednia werska strony
            </a> */}
        </>
    );
}

export default Home;
