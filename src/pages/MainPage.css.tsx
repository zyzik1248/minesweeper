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

  @media screen and (orientation:portrait) {
    width: 90%;
  }

  @media screen and (orientation:landscape) {
    height: 75vh;
  }
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

  @media screen and (orientation:portrait) {
      margin: auto;
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;

    @media only screen and (max-width: 400px) {
      width: 300px;
      height: 102px;
      line-height: 90px;
    }

  }

  @media screen and (orientation:landscape) {

    @media only screen and (max-width: 750px) {
      width: 300px;
      height: 102px;
      line-height: 90px;
    }

    @media only screen and (max-width: 610px) {
      width: 280px;
      height: 95px;
      line-height: 80px;
    }

  }
`

export const RightLink = styled(LinkStyled)`
  right: 15vw;

  @media screen and (orientation:landscape) {

    @media only screen and (max-width: 1100px) {
      right: 8vw;
    }

    @media only screen and (max-width: 870px) {
      right: 10px;
    }

  }

  @media screen and (orientation:portrait) {

    @media only screen and (max-width: 1100px) {
      right: 0;
    }
    
  }
`

export const LeftLink = styled(LinkStyled)`
  left: 15vw;

  @media screen and (orientation:landscape) {

    @media only screen and (max-width: 1100px) {
      left: 8vw;
    }

    @media only screen and (max-width: 870px) {
      left: 10px;
    }

  }

  @media screen and (orientation:portrait) {

    @media only screen and (max-width: 1100px) {
      left: 0;
    }
    
  }
`

export const LinkWrapper = styled.div`
  float: left;
  width: 50%;
  position: relative;
  margin-top: 20px;
  height: 124px;

  @media screen and (orientation:portrait) {
    width: 100%;

  @media only screen and (max-width: 400px) {
    height: 102px;
  }

}

@media screen and (orientation:landscape) {

  @media only screen and (max-width: 750px) {
    height: 102px;
  }

  @media only screen and (max-width: 610px) {
    height: 95px;
  }

}
`