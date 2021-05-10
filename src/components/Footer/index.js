import React from 'react';
import { FooterBase, FooterImg } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <FooterImg src={Logo} alt="Logo" />
      </a>
      <p>
        Acervo de videos favoritos do youtube
        {' '}
        <a href="/" target="blank">
          Desenvolvido por Davi Barboza
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
