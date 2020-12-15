import styled from 'styled-components'

interface props {
  isOpen: boolean
}

export const FieldStyled = styled.div<props>`
  position: relative;
  margin: 1px;
  border-radius: 15%;
  background-color: ${(props: props) => props.isOpen ? `gainsboro` : `#3e67ce`};
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`

export const Content = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
`