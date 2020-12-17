import React, { FunctionComponent, useState, useEffect } from 'react'

import Field from './../field/Field'
import { BoardStyled, Wrapper } from './Board.css'
import { generateFields } from './boardGenerator'
import { Position } from './position'
import { Themes } from './../../reducers/gameTheme/types'

type BoardProps = {
  width: number;
  height: number;
  mines: number;
  setFlags: (flags: number) => void;
  setIsLose: (isLose: boolean) => void;
  isLose: boolean;
  setIsWin: (isWin: boolean) => void;
  theme: Themes;
}

type Fields = {
  fields: FieldValue[][];
}

interface FieldValue {
  value: number;
  isOpen: boolean;
  isFlag: boolean;
  isQuestionMark: boolean;
}

const Board: FunctionComponent<BoardProps> = ({
  height, width, mines, setFlags, setIsLose, isLose, setIsWin, theme
}) => {
  const [fields, setFields] = useState<Fields>({ fields: [] })
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setFields({ fields: generateFields(width, height, mines) })
    setScreenSize();
    window.addEventListener('resize', setScreenSize);
  }, [width, height, mines]);

  const setScreenSize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  const checkFalgsAndFinish = () => {
    let isWIn = true;
    let flags = mines;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (fields.fields[i][j].value !== -1 && !fields.fields[i][j].isOpen) {
          isWIn = false;
        }
        if (fields.fields[i][j].isFlag) {
          flags--;
        }
      }
    }
    setFlags(flags)
    setIsWin(isWIn)
  }

  const click = (x: number, y: number) => {
    let tab = fields.fields.slice();
    if (!tab[x][y].isFlag) {
      if (!tab[x][y].isOpen) {
        discoverFields(x, y, tab)
      }
      else {
        if (detectFlags(x, y, tab)) {
          discoverFields(x - 1, y + 1, tab)
          discoverFields(x - 1, y, tab)
          discoverFields(x - 1, y - 1, tab)
          discoverFields(x, y + 1, tab)
          discoverFields(x, y - 1, tab)
          discoverFields(x + 1, y + 1, tab)
          discoverFields(x + 1, y, tab)
          discoverFields(x + 1, y - 1, tab)
        }
      }
      setFields({ fields: tab })
      checkFalgsAndFinish();
    }
  }

  const discoverFields = (x: number, y: number, tab: FieldValue[][]) => {
    if (x >= 0 && y >= 0 && x < height && y < width && !tab[x][y].isFlag) {
      tab[x][y].isOpen = true;
      tab[x][y].isQuestionMark = false;
      if (tab[x][y].value === -1) {
        setIsLose(true)
      }
      if (tab[x][y].value === 0) {
        tab = findBlank(tab, x, y);
      }
    }
  }

  const detectFlags = (x: number, y: number, tab: FieldValue[][]): boolean => {
    let count: number = 0;
    x + 1 < height && y + 1 < width && tab[x + 1][y + 1].isFlag && count++;
    x + 1 < height && tab[x + 1][y].isFlag && count++;
    x + 1 < height && y - 1 >= 0 && tab[x + 1][y - 1].isFlag && count++;
    y + 1 < width && tab[x][y + 1].isFlag && count++;
    y - 1 >= 0 && tab[x][y - 1].isFlag && count++;
    x - 1 >= 0 && y + 1 < width && tab[x - 1][y + 1].isFlag && count++;
    x - 1 >= 0 && tab[x - 1][y].isFlag && count++;
    x - 1 >= 0 && y - 1 >= 0 && tab[x - 1][y - 1].isFlag && count++;

    return tab[x][y].value === count;
  }

  const findBlank = (tab: FieldValue[][], x: number, y: number): FieldValue[][] => {
    let positions: Position[] = [{ x, y }];
    while (positions.length > 0) {
      const blankNeighbors: Position[] = [];
      for (let i = 0; i < positions.length; i++) {
        adddBlankField(positions[i].x + 1, positions[i].y + 1, blankNeighbors, tab)
        adddBlankField(positions[i].x + 1, positions[i].y, blankNeighbors, tab)
        adddBlankField(positions[i].x + 1, positions[i].y - 1, blankNeighbors, tab)
        adddBlankField(positions[i].x, positions[i].y + 1, blankNeighbors, tab)
        adddBlankField(positions[i].x, positions[i].y, blankNeighbors, tab)
        adddBlankField(positions[i].x, positions[i].y - 1, blankNeighbors, tab)
        adddBlankField(positions[i].x - 1, positions[i].y + 1, blankNeighbors, tab)
        adddBlankField(positions[i].x - 1, positions[i].y, blankNeighbors, tab)
        adddBlankField(positions[i].x - 1, positions[i].y - 1, blankNeighbors, tab)
      }
      positions = blankNeighbors.slice();
    }
    return tab;
  }

  const adddBlankField = (x: number, y: number, blankNeighbors: Position[], tab: FieldValue[][]) => {
    if (y >= 0 && x >= 0 && y < width && x < height && !tab[x][y].isOpen) {
      if (tab[x][y].value === 0) {
        blankNeighbors.push({ x, y })
      }
      tab[x][y].isOpen = true;
      tab[x][y].isFlag = false;
      tab[x][y].isQuestionMark = false;
    }
  }

  const detectFlag = (): number => {
    let flags = mines;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (fields.fields[i][j].isFlag) {
          flags--;
        }
      }
    }
    return flags;
  }

  const marking = (x: number, y: number) => {
    const tab = fields.fields;
    let flags = detectFlag();
    if (!tab[x][y].isOpen) {
      if (tab[x][y].isFlag) {
        tab[x][y].isQuestionMark = true;
        tab[x][y].isFlag = false;
        flags++;
      } else if (tab[x][y].isQuestionMark) {
        tab[x][y].isQuestionMark = false;
      } else if (flags === 0) {
        tab[x][y].isQuestionMark = true;
      } else {
        tab[x][y].isFlag = true;
        flags--;
      }
      setFields({ fields: tab })
      setFlags(flags)
    }
  }

  const handleContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  }

  return (
    <Wrapper>
      <BoardStyled
        height={height}
        width={width}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        onContextMenu={(event: React.MouseEvent<HTMLElement>) => handleContextMenu(event)}
      >
        {fields.fields.map((row, x) => (
          <>
            {row.map((el, y) => (
              <Field
                key={`${x}_${y}`}
                value={el.value}
                x={x}
                y={y}
                isOpen={el.isOpen}
                isFlag={el.isFlag}
                isQuestionMark={el.isQuestionMark}
                isLose={isLose}
                click={click}
                marking={marking}
                theme={theme}
              />
            ))}
          </>
        ))}
      </BoardStyled>
    </Wrapper>
  )
}

export default Board;