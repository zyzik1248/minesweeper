import styled from 'styled-components';

interface props {
  height: number
  width: number
  windowWidth: number
  windowHeight: number
}

export const BoardStyled = styled.div<props>`
  padding: 0;
  display: grid;
  ${(props: props) => props.windowHeight*(85 / props.height)/100*props.width < props.windowWidth ?
  `grid-template-rows: repeat(${props.height}, 1fr);
    grid-template-columns: repeat(${props.width}, ${85 / props.height}vh);
    height: 85vh;` :
  `grid-template-columns: repeat(${props.width}, 1fr);
    grid-template-rows: repeat(${props.height}, ${95 / props.width}vw);
    width: 95vw;`
  }
  grid-gap: 0px;
  margin: 25px 0;
  letter-spacing: 0px;
  word-spacing: 0px;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`