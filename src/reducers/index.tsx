import { combineReducers } from 'redux'
import { GameParametersReducer } from './gameParameters/reducers'

export const rootReducer = combineReducers({
  gameParameters: GameParametersReducer
})

export type RootState = ReturnType<typeof rootReducer>