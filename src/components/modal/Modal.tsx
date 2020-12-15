import React, { FunctionComponent, useState, useEffect } from 'react'
import { Wrapper, Background, Content } from './Modal.css'

type ModalProps = {
  children: React.ReactNode
  startOpen?: boolean
  close?: () => void
}

const Modal: FunctionComponent<ModalProps> = ({ children, startOpen, close }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(startOpen ? startOpen : false)
  }, [startOpen]);

  const closeModal = ()=>{
    setIsOpen(false);
    if(close){
      close();
    }
  }

  return (
    <>
      {
        isOpen ?
          <Wrapper>
            <Background onClick={closeModal} />
            <Content>
              {children}
            </Content>
          </Wrapper> : null
      }
    </>
  )
}

export default Modal;