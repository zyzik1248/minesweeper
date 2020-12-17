import styled from 'styled-components'

export const SingleWinner = styled.div`
  width: 50%;
  margin: 4px;
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
`

export const TableTitleStyled = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 35px;
`

export const Hr = styled.hr`
  color: #66ccff;
`