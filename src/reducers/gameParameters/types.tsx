export enum Levels {
  beginner,
  intermadiate,
  expert,
  custom,
}

export interface Parameters {
  level: Levels,
  width: number,
  height: number,
  mines: number
}

export const SET_PARAMETERS = 'SET_PARAMETERS'

interface SetParametersAcition {
  type: typeof SET_PARAMETERS
  payload: Parameters
}

export type GameParamatersTypes = SetParametersAcition