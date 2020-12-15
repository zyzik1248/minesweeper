import React, { FunctionComponent } from 'react'

import { FieldStyled, Content } from './Field.css'

type FieldProps = {
  value: number;
  x: number;
  y: number;
  isOpen: boolean;
  isFlag: boolean;
  isQuestionMark: boolean;
  click: (x: number, y: number) => void;
  marking: (x: number, y: number) => void
}

const Field: FunctionComponent<FieldProps> = ({ value, x, y, isOpen, isFlag, isQuestionMark, click, marking }) => {

  const handleClick = () => {
    click(x, y);
  }

  const handleFlag = () => {
    marking(x, y);
  }

  return (
    <FieldStyled
      isOpen={isOpen}
      onClick={handleClick}
      onContextMenu={handleFlag}
    >
      <Content>
        {isOpen && value}
        {!isOpen && isFlag && 'x'}
        {!isOpen && isQuestionMark && '?'}
      </Content>
    </FieldStyled>
  )
};

export default Field;