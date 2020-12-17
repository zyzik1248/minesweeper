import React, { useState } from 'react'
import { GearButton, SubmitButton, Wrapper } from './Settings.css'
import Modal from '../modal/Modal'
import Level from './Level'
import Theme from './Theme'
import { Levels } from './../../reducers/gameParameters/types'
import { SetParametersAcition } from './../../reducers/gameParameters/actions'
import { SetThemesAction } from './../../reducers/gameTheme/actions'
import { RootState } from './../../reducers/index'
import { useSelector, useDispatch } from 'react-redux'

const Settings = () => {
  const selectorParamaters = useSelector((state: RootState) => state.gameParameters)
  const selectorTheme = useSelector((state: RootState) => state.gameTheme)

  const dispatch = useDispatch();
  const [parameters, setParameters] = useState(selectorParamaters)
  const [themes, setThemes] = useState(selectorTheme)
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeParameters = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if ((name === 'width' || name === 'height') && parameters.mines >= (parameters.width - 1) * (parameters.height - 1)) {
      const newMines = name === 'width' ? (value as any - 1) * (parameters.height - 1) : (parameters.width - 1) * (value as any - 1);
      setParameters(prevState => ({
        ...prevState,
        [name]: value,
        ['mines']: newMines,
      }))
    } else {
      setParameters(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const handleChangeThemes = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setThemes({theme: parseInt(value)})
  }

  const save = (event: React.FormEvent) => {
    event.preventDefault();
    setIsOpen(false);
    parameters.level = parameters.level*1
    switch (parameters.level) {
      case Levels.beginner:
        parameters.width = 8;
        parameters.height = 8;
        parameters.mines = 10;
        break;
      case Levels.intermadiate:
        parameters.width = 16;
        parameters.height = 16;
        parameters.mines = 40;
        break;
      case Levels.expert:
        parameters.width = 30;
        parameters.height = 16;
        parameters.mines = 99;
        break;
      default:
        parameters.width = parameters.width * 1;
        parameters.height = parameters.height * 1;
        parameters.mines = parameters.mines * 1;
    }
    dispatch(SetParametersAcition(parameters));
    dispatch(SetThemesAction(themes))
  }

  return (
    <div>
      <Modal startOpen={isOpen} close={() => setIsOpen(false)}>
        <Wrapper onSubmit={(event: React.FormEvent) => save(event)}>
          <Level
            values={parameters}
            handleChange={handleChangeParameters}
          />
          <Theme
            values={themes}
            handleChange={handleChangeThemes}
          />
          <SubmitButton type='submit'>save</SubmitButton>
        </Wrapper>
      </Modal>
      <GearButton onClick={() => setIsOpen(true)} />
    </div>
  )
}

export default Settings;