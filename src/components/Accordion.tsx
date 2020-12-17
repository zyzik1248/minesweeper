import React, { useState, FunctionComponent } from 'react'
import { Wrapper, Body, AccordionButton } from './Accordion.css'

type AccordionProps = {
  children: React.ReactNode,
  title: string
}

const Accordion: FunctionComponent<AccordionProps> = ({ children, title }) => {
  const [isUp, setIsUp] = useState(false)
  const [isDown, setIsDown] = useState(false)

  const handleOpen = () => {
    if(isUp){
      setIsDown(true);
      setIsUp(false);
    } else{
      setIsDown(false);
      setIsUp(true)
    }
  }

  return (
    <>
      <Wrapper>
        {title}
        <AccordionButton onClick={handleOpen} isDown={isDown} isUp={isUp}/>
      </Wrapper>
      <Body isUp={isUp} isDown={isDown}>
        {children}
      </Body>
    </>
  )
}

export default Accordion;