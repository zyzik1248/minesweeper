import { Position } from './position'

interface FieldValue {
  value: number;
  isOpen: boolean;
  isFlag: boolean;
  isQuestionMark: boolean
}

declare global {
  namespace NodeJS {
    interface Global {
      width: number;
      height: number;
    }
  }
}

export const generateFields = (width: number, height: number, mines: number): FieldValue[][] => {
  let fields: FieldValue[][] = [];
  global.width = width;
  global.height = height;
  for (let i = 0; i < height; i++) {
    fields[i] = [];
    for (let j = 0; j < width; j++) {
      const field: FieldValue = { value: 0, isOpen: false, isFlag: false, isQuestionMark: false }
      fields[i][j] = field;
    }
  }
  for (let i = 0; i < mines; i++) {
    let position: Position = generateMinePosition(fields);
    fields[position.x][position.y].value = -1;
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (fields[i][j].value === 0) {
        let countMines: number = 0;
        isMines(fields, i - 1, j - 1) && countMines++;
        isMines(fields, i - 1, j) && countMines++;
        isMines(fields, i - 1, j + 1) && countMines++;
        isMines(fields, i, j - 1) && countMines++;
        isMines(fields, i, j + 1) && countMines++;
        isMines(fields, i + 1, j - 1) && countMines++;
        isMines(fields, i + 1, j) && countMines++;
        isMines(fields, i + 1, j + 1) && countMines++;
        fields[i][j].value = countMines;
      }
    }
  }
  return fields;
};

const generateMinePosition = (fields: FieldValue[][]): Position => {
  let position: Position = { x: -1, y: -1 };
  for (let i = 0; i < 5; i++) {
    position = randomMine();
    if (fields[position.x][position.y].value !== -1) {
      return { x: position.x, y: position.y }
    }
  }
  for (let j = position.y; j < global.width; j++) {
    if (fields[position.x][j].value !== -1) {
      return { x: position.x, y: j }
    }
  }
  for (let i = position.x + 1; i < global.height; i++) {
    for (let j = 0; j < global.width; j++) {
      if (fields[i][j].value !== -1) {
        return { x: i, y: j }
      }
    }
  }
  for (let j = position.y; j <= 0; j--) {
    if (fields[position.x][j].value !== -1) {
      return { x: position.x, y: j }
    }
  }
  for (let i = position.x + 1; i <= 0; i--) {
    for (let j = position.y; j <= 0; j--) {
      if (fields[i][j].value !== -1) {
        return { x: i, y: j }
      }
    }
  }
  return position;
}

const randomMine = (): Position => {
  let x: number = Math.floor(Math.random() * (global.height))
  let y: number = Math.floor(Math.random() * (global.width))
  return { x, y }
}

const isMines = (fields: FieldValue[][], x: number, y: number): boolean => {
  if (x === -1 || x === global.height || y === -1 || y === global.width) {
    return false;
  }
  if (fields[x][y].value === -1) {
    return true;
  }
  return false;
}