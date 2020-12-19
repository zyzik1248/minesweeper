import React, { FunctionComponent } from 'react'
import { RadioController, RangeStyled, RangeValueStyled, RangeController, Body } from './Settings.css'
import Accordion from './../Accordion'
import { Levels } from './../../reducers/gameParameters/types'

interface LevelProps {
  values: any,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Level: FunctionComponent<LevelProps> = ({ values, handleChange }) => {
  return (
    <Accordion title="level">
      <Body>
        <RadioController>
          <label>{Levels[Levels.beginner]}
            <input
              type="radio"
              name="level"
              value={Levels.beginner}
              checked={values.level * 1 === Levels.beginner}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <span></span>
          </label>
          <label>{Levels[Levels.intermadiate]}
            <input
              type="radio"
              name="level"
              value={Levels.intermadiate}
              checked={values.level * 1 === Levels.intermadiate}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <span></span>
          </label>
          <label>{Levels[Levels.expert]}
            <input
              type="radio"
              name="level"
              value={Levels.expert}
              checked={values.level * 1 === Levels.expert}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <span></span>
          </label>
          <label>{Levels[Levels.custom]}
            <input
              type="radio"
              name="level"
              value={Levels.custom}
              checked={values.level * 1 === Levels.custom}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <span></span>
          </label>
        </RadioController>
        <RangeController>
          <RangeStyled>
            <RangeValueStyled disabled={values.level * 1 !== Levels.custom}>{values.width}</RangeValueStyled>
            <input
              id="width"
              name="width"
              type="range"
              value={values.width}
              disabled={values.level * 1 !== Levels.custom}
              min="8"
              max="30"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <label htmlFor="width">width</label>
          </RangeStyled>
          <RangeStyled>
            <RangeValueStyled disabled={values.level * 1 !== Levels.custom}>{values.height}</RangeValueStyled>
            <input
              id="height"
              name="height"
              type="range"
              value={values.height}
              disabled={values.level * 1 !== Levels.custom}
              min="8"
              max="24"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <label htmlFor="height">height</label>
          </RangeStyled>
          <RangeStyled>
            <RangeValueStyled disabled={values.level * 1 !== Levels.custom}>{values.mines}</RangeValueStyled>
            <input
              id="mines"
              name="mines"
              type="range"
              value={values.mines}
              disabled={values.level * 1 !== Levels.custom}
              min="10"
              max={(values.width - 1) * (values.height - 1)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <label htmlFor="mines">mines</label>
          </RangeStyled>
        </RangeController>
      </Body>
    </Accordion>
  )
}

export default Level;