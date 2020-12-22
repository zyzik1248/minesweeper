import React, { FunctionComponent } from 'react'
import { GiRollingBomb } from 'react-icons/gi'

import { Wrapper, LoadBobmb } from './Loading.css'

interface LoadingProps {
  invisible?: boolean,
}

const Loading: FunctionComponent<LoadingProps> = ({ invisible }) => {
  return (
    <Wrapper
      invisible={invisible}
    >
      <LoadBobmb>
        <GiRollingBomb></GiRollingBomb>
        <GiRollingBomb></GiRollingBomb>
        <GiRollingBomb></GiRollingBomb>
        <GiRollingBomb></GiRollingBomb>
      </LoadBobmb>
    </Wrapper>
  )
}

export default Loading