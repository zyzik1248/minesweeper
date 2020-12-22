import styled, { keyframes } from 'styled-components'

interface WrapperProps {
  invisible?: boolean
}

export const Wrapper = styled.div`
  display: ${(props: WrapperProps) => props.invisible ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 4;
  text-align: center;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  top: 0;
`

const coloring = keyframes`
  0%, 100% { 
    color: grey; 
  }
  50% {
    color: red; 
  }
`

export const LoadBobmb = styled.div`
  svg{
    font-size: 32px;
    color: grey;
    animation: ${coloring} 2s infinite ease-in-out;

    @media only screen and (max-width: 610px) {
      font-size: 24px;
    }
  }

  svg:nth-child(1){ 
    animation-delay: 0s;
  }

  svg:nth-child(2){ 
    animation-delay: 0.3s;
  }

  svg:nth-child(3){ 
    animation-delay: 0.6s;
  }

  svg:nth-child(4){ 
    animation-delay: 0.9s;
  }
`