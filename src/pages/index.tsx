import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../assets/logo/logo.svg';
import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';

export const Header = styled.header`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid var(--primary-color);
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: 100%;
  height: 82%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 8%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
`;

export const ConteudoHeader = styled.div`
  width: 77.5rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderLogoTitulo = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  gap: 2rem;
`;

export const ConteudoMain = styled.div`
  width: 76.25rem;
  height: 25.313rem;
  display: flex;
  gap: 2rem;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;

    max-width: 15.625rem;
    color: #929292;
  }
`;

export const ConteudoFooter = styled.div`
  padding: 0 1rem;
  color: white;
`;

export const CardPrevisaoAtual = styled.div`
  width: 24.188rem;
  height: 25.313rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  box-shadow: 6px 6px 25px rgba(100, 149, 237, 0.5);
  border-radius: 15px;
`;

export const CardPrevisaoProximosDias = styled.div`
  width: 50.438rem;
  height: 25.313rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  box-shadow: 6px 6px 25px rgba(100, 149, 237, 0.5);
  border-radius: 15px;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '20rem',
    },
  })
);

export default function Home() {
  const classes = useStyles();
  const mensagemLoading = 'Pesquise pela cidade para obter a previsão do tempo.';
  return (
    <>
      <Header>
        <ConteudoHeader>
          <HeaderLogoTitulo>
            <Image src={Logo} alt="VaiChover?" width={90} height={90} />
            <div style={{ paddingTop: '1rem' }}>
              <TextField
                id="outlined-secondary"
                label="Digite o nome da cidade"
                variant="outlined"
                color="primary"
                size="small"
                className={classes.root}
              />
            </div>
          </HeaderLogoTitulo>
        </ConteudoHeader>
      </Header>
      <Main>
        <ConteudoMain>
          <CardPrevisaoAtual><p>{mensagemLoading}</p></CardPrevisaoAtual>
          <CardPrevisaoProximosDias><p>{mensagemLoading}</p></CardPrevisaoProximosDias>
        </ConteudoMain>
      </Main>
      <Footer>
        <ConteudoFooter>© Lucas Santana</ConteudoFooter>
      </Footer>
    </>
  );
}
