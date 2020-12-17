import React from 'react'
import Bac from './../assets/bac.png'
import { Wrapper, Img, RightLink, LeftLink, LinkWrapper } from './MainPage.css'

const MainPage = () => {
  return (
    <Wrapper>
      <Img src={Bac} />
      <LinkWrapper>
        <LeftLink to='/score'>score</LeftLink>
      </LinkWrapper>
      <LinkWrapper>
        <RightLink to='/game'>game</RightLink>
      </LinkWrapper>
    </Wrapper>
  )
}

export default MainPage