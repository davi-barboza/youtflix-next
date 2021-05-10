import React from 'react';
import Logo from '../../assets/img/LogoInt.png';
import Button from '../Button';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Video
            </Button>
        </nav>    
    );
}

export default Menu;