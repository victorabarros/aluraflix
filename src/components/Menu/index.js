import React from 'react';
import './Menu.css'
import ButtonLink from './components/ButtonLink';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src="https://fontmeme.com/permalink/200728/9e0f0e8d5743b09c7dc518abf5e56570.png" alt="netflix-font" border="0"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo vídeonovo
            </ButtonLink>
        </nav>
    );
}

export default Menu;
