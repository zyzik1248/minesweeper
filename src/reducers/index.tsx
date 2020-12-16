import { combineReducers } from 'redux'
import { GameParametersReducer } from './gameParameters/reducers'
import { GameThemeReducer } from './gameTheme/reducers'

export const rootReducer = combineReducers({
  gameParameters: GameParametersReducer,
  gameTheme: GameThemeReducer
})

export type RootState = ReturnType<typeof rootReducer>