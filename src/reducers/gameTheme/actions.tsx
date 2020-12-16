import { Theme, Themes, SET_THEME, GameTheme } from './types'

export function SetThemesAction(theme: Theme): GameTheme {
  return {
    type: SET_THEME,
    payload: theme,
  }
} 
