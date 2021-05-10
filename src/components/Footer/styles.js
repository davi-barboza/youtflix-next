import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--blue);
  padding: 25px 16px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const FooterImg = styled.img`
  width: 70px;
  margin-bottom: 15px
`;