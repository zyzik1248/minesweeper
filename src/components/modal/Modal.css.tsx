import styled, {keyframes} from 'styled-components';

const background = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }

  to {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const position = keyframes`
  from {
    transform: translate(0,-50%);
  }

  to {
    transform: translate(0,0);
  }
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  top:0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  animation: ${background} 0.3s linear;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
`

export const Background = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  position: absolute;
  background-color: white;
  width: 70%;
  max-height: 80%;
  margin: auto;
  padding: 20px;
  top: 0; 
  left: 0; 
  bottom: 0; 
  overflow-y: auto;
  right: 0;
  border-radius: 30px;
  box-shadow: 5px 5px 5px teal;
  animation: ${position} 0.3s ease-out;

  @media only screen and (max-width: 610px) {
    width: 80%;
  }

`