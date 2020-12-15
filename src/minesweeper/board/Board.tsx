import React, { FunctionComponent, useState, useEffect } from 'react'

import Field from './../field/Field'
import { BoardStyled, Wrapper } from './Board.css'
import { generateFields } from './boardGenerator'
import { Position } from './position'

type BoardProps = {
  width: number;
  height: number;
  mines: number;
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

const Board: FunctionComponent<BoardProps> = ({ height, width, mines }) => {
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

  const click = (x: number, y: number) => {
    let tab = fields.fields.slice();
    if (!tab[x][y].isFlag) {
      if (!tab[x][y].isOpen) {
        discoverFields(x, y, tab)
      }
      else {
        discoverFields(x - 1, y + 1, tab)
        discoverFields(x - 1, y, tab)
        discoverFields(x - 1, y - 1, tab)
        discoverFields(x, y + 1, tab)
        discoverFields(x, y - 1, tab)
        discoverFields(x + 1, y + 1, tab)
        discoverFields(x + 1, y, tab)
        discoverFields(x + 1, y - 1, tab)
      }
      setFields({ fields: tab })
    }
  }

  const discoverFields = (x: number, y: number, tab: FieldValue[][]) => {
    if (x >= 0 && y >= 0 && x < height && y < width && !tab[x][y].isFlag) {
      tab[x][y].isOpen = true;
      tab[x][y].isQuestionMark = false;
      if (tab[x][y].value === 0) {
        tab = findBlank(tab, x, y);
      }
    }
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

  const handleContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  }

  const marking = (x: number, y: number) => {
    const tab = fields.fields;
    if (!tab[x][y].isOpen) {
      if (tab[x][y].isFlag) {
        tab[x][y].isQuestionMark = true;
        tab[x][y].isFlag = false;
      } else if (tab[x][y].isQuestionMark) {
        tab[x][y].isQuestionMark = false;
      } else {
        tab[x][y].isFlag = true;
      }
      setFields({ fields: tab })
    }
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
                click={click}
                marking={marking}
              />
            ))}
          </>
        ))}
      </BoardStyled>
    </Wrapper>
  )
}

export default Board;