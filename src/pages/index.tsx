

import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 20%;
  background-color: rgb(0, 128, 0);
`;

export const Main = styled.main`
  width: 100%;
  height: 80%;
  background-color: rgb(255, 0, 0);
`;

export const Footer = styled.footer`
  width: 100%;
  height: 20%;
  background-color: rgb(0, 128, 0);
`;


export default function Home() {
  return (
    <>
    <Header>Titulo</Header>
    <Main>Corpo</Main>
    <Footer>Rodapé</Footer>
    </>
  )
}
