import React, { FunctionComponent } from 'react'

import { FieldStyled } from './Field.css'

type FieldProps = {
  value: number;
  x: number;
  y: number;
  isOpen: boolean;
  click: (x: number, y: number) => void;
}

const Field: FunctionComponent<FieldProps> = ({ value, x, y, isOpen, click }) => {

  const handleClick = () => {
    click(x, y);
  }

  return (
    <FieldStyled
      onClick={handleClick}
    >
      {isOpen && value}
    </FieldStyled>
  )
};

export default Field;