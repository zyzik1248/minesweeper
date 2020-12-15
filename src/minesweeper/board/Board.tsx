import React, { FunctionComponent, useState, useEffect } from 'react'

import Field from './../field/Field'
import { BoardStyled} from './Board.css'
import { generateFields } from './boardGenerator'

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

  useEffect(() => {
    setFields({ fields: generateFields(width, height, mines) })
  }, []);

  return (
    <div>
      <BoardStyled
        width={width}
      >
        {fields.fields.map((row, x) => (
          <>
            {row.map((el, y) => (
              <Field
                key={`${x}_${y}`}
                value={el.value}
                x={x}
                y={y}
              />
            ))}
          </>
        ))}
      </BoardStyled>
    </div>
  )
}

export default Board;