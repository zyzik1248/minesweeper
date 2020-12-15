import React, { FunctionComponent } from 'react'

import { FieldStyled } from './Field.css'

type FieldProps = {
  value: number;
  x: number;
  y: number;
  isOpen: boolean;
  isFlag: boolean;
  click: (x: number, y: number) => void;
  setFlag: (x: number, y: number) => void
}

const Field: FunctionComponent<FieldProps> = ({ value, x, y, isOpen, isFlag, click, setFlag }) => {

  const handleClick = () => {
    click(x, y);
  }

  const handleFlag = () => {
    setFlag(x, y);
  }

  return (
    <FieldStyled
      onClick={handleClick}
      onContextMenu={handleFlag}
    >
      {isOpen && value}
      {!isOpen && isFlag && 'x'}
    </FieldStyled>
  )
};

export default Field;