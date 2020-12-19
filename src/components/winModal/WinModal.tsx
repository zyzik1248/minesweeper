import React, { FunctionComponent, useState } from 'react'

import { SubmitButton, Wrapper, Text, Header, Input } from './WinModal.css'
import { writeData } from './../../database/FirebaseHelper'

interface PropsWinModal {
  time: number
  width: number
  height: number
  mines: number
  level: number
  closeModal: () => void
}

const WinModal: FunctionComponent<PropsWinModal> = ({ time, width, height, mines, level, closeModal }) => {
  const [name, setName] = useState('')
  const [isError, setIsError] = useState(false)

  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    if (name.length > 0) {
      writeData({
        time,
        name,
        width,
        height,
        mines,
        level
      })
      closeModal();
    } else {
      setIsError(true)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsError(event.target.value === '');
  }

  const handleBlur = () => {
    setIsError(name === '');
  }

  return (
    <Wrapper onSubmit={(event: React.FormEvent) => save(event)}>
      <Header>CONGRATULATIONS</Header>
      <Text>you won, your time is {time} seconds</Text>
      <Input
        type='text'
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
        maxLength={22}
        onBlur={handleBlur}
        error={isError}
      />
      <SubmitButton type='submit'>save</SubmitButton>
    </Wrapper>
  )
}

export default WinModal;