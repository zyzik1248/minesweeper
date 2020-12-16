import { Parameters, SET_PARAMETERS, GameParamatersTypes, Levels } from './types'

const initialState: Parameters = {
  level: Levels.beginner,
  width: 8,
  height: 8,
  mines: 10
}

export function GameParametersReducer(
  state = initialState,
  action: GameParamatersTypes
): Parameters {
  switch (action.type) {
    case SET_PARAMETERS:
      return action.payload
    default:
      return state
  }
}