import { Parameters, SET_PARAMETERS, GameParamatersTypes } from './types'

export function SetParametersAcition(paramaters: Parameters): GameParamatersTypes {
  return {
    type: SET_PARAMETERS,
    payload: paramaters
  }
}