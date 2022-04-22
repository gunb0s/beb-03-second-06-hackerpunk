import { React, styled } from '..';

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  color: whitesmoke;
`;

const Copyright = styled.h1`
  margin-left: 10px;
`;

const Message = styled.h1``;

const COMPANY_NAME = 'Hacker Punk';

function Footer({ message = '' } = {}) {
  return (
    <Container>
      <InnerContainer>
        <Copyright>
          © 2022 - {new Date().getFullYear()} {COMPANY_NAME}, Inc
        </Copyright>
        <Message>{message}</Message>
      </InnerContainer>
    </Container>
  );
}

export default Footer;