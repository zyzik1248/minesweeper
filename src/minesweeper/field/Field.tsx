import React, { FunctionComponent, memo } from 'react'

import { FieldStyled, Content } from './Field.css'
import { marks } from './Marks'
import { Themes } from '../../reducers/gameTheme/types';

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
  theme: Themes
}

const Field: FunctionComponent<FieldProps> = ({
  value, x, y, isOpen, isFlag, isQuestionMark, isLose, click, marking, theme
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
      colorTheme={theme}
    >
      <Content>
        {isOpen && value !== 0 && !isFlag && value !== -1 && marks(theme, value + '')}
        {isOpen && !isFlag && value === -1 && marks(theme, 'active_bomb')}
        {isLose && !isOpen && !isFlag && value === -1 && marks(theme, 'bomb')}
        {isFlag && !(isLose && value !== -1) && marks(theme, 'flag')}
        {isLose && isFlag && value !== -1 && marks(theme, 'active_flag')}
        {isQuestionMark && marks(theme, 'question')}
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