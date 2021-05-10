import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  margin-top: 50px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  color: white;
  font-size: 20px;
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  position: relative;
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  overflow: hidden;
  flex-direction: row;

  @media(max-width: 570px){
    li{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-bottom: 16px;
`;

