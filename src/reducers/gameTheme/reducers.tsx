import { Theme, Themes, GameTheme, SET_THEME} from './types'

const initialState: Theme = {
  theme: Themes.blue
}

export function GameThemeReducer(
  state = initialState,
  action: GameTheme
): Theme {
  switch (action.type) {
    case SET_THEME:
      return action.payload
    default:
      return state
  }
}
