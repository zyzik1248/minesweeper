import React from 'react'
import { FiClock } from 'react-icons/fi'

const Timer = () => {

  return (
    <>
      <FiClock style={{ marginLeft: 30 }} />
      <span style={{ fontSize: 20, margin: 5 }}>
        999
      </span>
    </>
  )
}

export default Timer;