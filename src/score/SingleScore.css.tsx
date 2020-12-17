import styled from 'styled-components'

export const SingleWinner = styled.div`
  width: 50%;
  margin: 4px;

  @media only screen and (max-width: 900px) {
    width: 80%;
    margin-left: 68px;
  }

  @media only screen and (max-width: 550px) {
    font-size: 13px;
    margin-left: 53px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 12px;
    margin-left: 43px;
  }
`

export const Row = styled.div`
  background-color: #e6e6e6;
  line-height: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap; 
  padding: 0 30px;

  @media only screen and (max-width: 550px) {
    height: 45px;
    line-height: 45px;
  }

  @media only screen and (max-width: 400px) {
    height: 35px;
    line-height: 35px;
    padding: 0 5px;
  }
`

export const ColumnHead = styled.div`
  font-weight: bold;
`

export const Index = styled.div`
  background-color: #ff704d;
  position: absolute;
  height: 60px;
  width: 60px;
  left: -8px;
  text-align: center;
  font-size: 20px;
  transform: translateX(-100%);

  @media only screen and (max-width: 550px) {
    height: 45px;
    width: 45px;
    font-size: 18px;
  }

  @media only screen and (max-width: 400px) {
    height: 35px;
    width: 35px;
    font-size: 15px;
  }
`

export const TableTitleStyled = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 35px;

  @media only screen and (max-width: 900px) {
    width: 80%;
  }

  @media only screen and (max-width: 550px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 15px;
  }
`

export const Hr = styled.hr`
  color: #66ccff;
`