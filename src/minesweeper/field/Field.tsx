import React, { FunctionComponent, memo } from 'react'

import { FieldStyled, Content } from './Field.css'
import { marks } from './Marks'

type FieldProps = {
  value: number;
  x: number;
  y: number;
  isOpen: boolean;
  isFlag: boolean;
  isQuestionMark: boolean;
  isLose: boolean;
  click: (x: number, y: number) => void;
  marking: (x: number, y: number) => void
}

const Field: FunctionComponent<FieldProps> = ({
  value, x, y, isOpen, isFlag, isQuestionMark, isLose, click, marking
}) => {

  const handleClick = () => {
    if (!isLose) {
      click(x, y);
    }
  }

  const handleFlag = () => {
    if (!isLose) {
      marking(x, y);
    }
  }

  return (
    <FieldStyled
      isOpen={isOpen}
      onClick={handleClick}
      onContextMenu={handleFlag}
    >
      <Content>
        {isOpen && value !== 0 && !isFlag && value !== -1 && marks(value + '')}
        {isOpen && !isFlag && value === -1 && marks('active_bomb')}
        {isLose && !isOpen && !isFlag && value === -1 && marks('bomb')}
        {isFlag && !(isLose && value !== -1) && marks('flag')}
        {isLose && isFlag && value !== -1 && marks('active_flag')}
        {isQuestionMark && marks('question')}
      </Content>
    </FieldStyled>
  )
};

const isRender = (prevProps: any, nextProps: any): any => {
  if (prevProps.isOpen === nextProps.isOpen && prevProps.isFlag === nextProps.isFlag
    && prevProps.isQuestionMark === nextProps.isQuestionMark && prevProps.isLose === nextProps.isLose
    && prevProps.value === nextProps.value && prevProps.x === nextProps.x && prevProps.y === nextProps.y) {
    return true
  }
  if (nextProps.isLose && nextProps.isFlag && nextProps.value !== -1) {
    return false;
  }
  if (nextProps.isLose && nextProps.value !== -1) {
    return true;
  }

  return false;
}

export default memo(Field, isRender);