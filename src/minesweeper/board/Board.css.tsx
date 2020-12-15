import styled from 'styled-components'

interface props {
  width: number
}

export const BoardStyled = styled.div<props>`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(${({ width }) => width}, 1fr);
  width: 95vw;
  grid-gap: 0px;
  margin: 25px 0;
  letter-spacing: 0px;
  word-spacing: 0px;
`