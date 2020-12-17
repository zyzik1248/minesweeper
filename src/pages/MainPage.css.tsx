import styled from 'styled-components';
import Button from './../assets/button.png'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const Img = styled.img`
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
`

const LinkStyled = styled(Link)`
  color: #333333;
  font-size: 30px;
  text-align: center;
  width: 360px;
  height: 124px;
  line-height: 120px;
  background-image: url(${Button});
  text-decoration: none;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
`

export const RightLink = styled(LinkStyled)`
  right: 15vw;
`

export const LeftLink = styled(LinkStyled)`
  left: 15vw;
`

export const LinkWrapper = styled.div`
  float: left;
  width: 50%;
  position: relative;
  margin-top: 20px;
  height: 124px;
`