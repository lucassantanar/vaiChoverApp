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
`;

export const ConteudoFooter = styled.div`
  padding: 0 1rem;
  color: white;
`;



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '20rem',
    },
  }),
);


export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Header>
        <ConteudoHeader>
          <HeaderLogoTitulo>
          <Image src={Logo} alt="VaiChover?" width={90} height={90} />
          <div style={{paddingTop: '1rem'}}>
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
      <Main>Corpo</Main>
      <Footer>
        <ConteudoFooter>© Lucas Santana</ConteudoFooter>
      </Footer>
    </>
  );
}
