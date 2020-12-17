import styled, { keyframes, css } from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri'

interface Props {
  isUp: boolean
  isDown: boolean
}

const down = keyframes`
  from {
    max-height: 0px;
  }

  to {
    max-height: 100vh;
  }
`;

const up = keyframes`
  from {
    max-height: 100vh;
  }

  to {
    max-height: 0px;
  }
`;

export const Wrapper = styled.div`
  text-align: left;
  width: 90%;
  margin: 2px 15px;
  padding: 20px;
  font-size: 22px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: #33ff99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

export const Body = styled.div`
  width: 50%;
  margin: 0 auto;
  overflow-y: hidden;

  @media only screen and (max-width: 610px) {
    width: 100%;
  }
  
  ${(props: Props) => !props.isDown && !props.isUp &&
    css`
      max-height: 0px;
    `
  }
  ${(props: Props) => props.isUp && 
    css`
      max-height: 100vh;
      animation: ${down} 0.5s ease-out
    `
  }
  ${(props: Props) => props.isDown && 
    css`
      max-height: 0px;
      animation: ${up} 0.5s ease-out
    `
  }
`

export const AccordionButton = styled(RiArrowDownSLine)`
  font-size: 32px;
  transform: ${(props : Props)=>props.isUp ? `rotate(180deg)` : `rotate(0deg)`};
`