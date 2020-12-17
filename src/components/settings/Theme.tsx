import React, { FunctionComponent } from 'react'
import { RadioControllerTheme, Body } from './Settings.css'
import Accordion from './../Accordion'
import { Themes } from './../../reducers/gameTheme/types'

interface ThemeProps {
  values: any,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Theme: FunctionComponent<ThemeProps> = ({ values, handleChange }) => {
  return (
    <Accordion title="theme">
      <Body>
        <RadioControllerTheme>
          <label>{Themes[Themes.blue]}
            <input
              type="radio"
              name="theme"
              value={Themes.blue}
              checked={values.theme * 1 === Themes.blue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <span></span>
          </label>
          <label>{Themes[Themes.green]}
            <input
              type="radio"
              name="theme"
              value={Themes.green}
              checked={values.theme * 1 === Themes.green}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <span></span>
          </label>
          <label>{Themes[Themes.pink]}
            <input
              type="radio"
              name="theme"
              value={Themes.pink}
              checked={values.theme * 1 === Themes.pink}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <span></span>
          </label>
        </RadioControllerTheme>
      </Body>
    </Accordion>
  )
}

export default Theme;