import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
`

export const Menu = styled.div`
  padding-top: 20px;
  width: 100%;
  text-align: center;
  font-size: 36px;

  @media only screen and (max-width: 450px) {
    text-align: left;
    padding-left: 20px;
  }
`