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
  ${(props: props) => props.windowHeight * (85 / props.height) / 100 * props.width < props.windowWidth ?
    `grid-template-rows: repeat(${props.height}, ${props.windowHeight * (85 / props.height) / 100 < 30 ? `30px` : `1fr`});
    grid-template-columns: repeat(${props.width}, ${props.windowHeight * (85 / props.height) / 100 < 30 ? `30px` : `${85 / props.height}vh`});
    ` :
    `grid-template-columns: repeat(${props.width}, ${props.windowWidth * (95 / props.width) / 100 < 30 ? `30px` : `1fr`});
    grid-template-rows: repeat(${props.height}, ${props.windowWidth * (95 / props.width) / 100 < 30 ? `30px` : `${95 / props.width}vw`});
    `
  }
  width: 100%;
  height: 100%;
  grid-gap: 0px;
  letter-spacing: 0px;
  word-spacing: 0px;
`

export const Wrapper = styled.div`
  height: 85vh;
  width: 95vw;
  display: flex;
  margin: 25px auto;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: auto;
  ::-webkit-scrollbar { 
    display: none;
  }
`