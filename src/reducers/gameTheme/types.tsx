export enum Themes {
  blue,
  green,
  pink,
}

export interface Theme {
  theme: Themes
}

export const SET_THEME = 'SET_TEHEME';

export interface SetTehemeAction {
  type: typeof SET_THEME,
  payload: Theme
} 

export type GameTheme = SetTehemeAction;