import React from 'react'
import { IoMdFlag } from 'react-icons/io'
import { GiRollingBomb } from 'react-icons/gi'
import { BsFillQuestionDiamondFill } from 'react-icons/bs'

export const marks = (type: String) => {
  switch (type) {
    case 'bomb':
      return <GiRollingBomb style={{ color: "#DAAE00" }} />
    case 'flag':
      return <IoMdFlag style={{ color: "#DAAE00" }} />
    case 'question':
      return <BsFillQuestionDiamondFill style={{ color: "#DAAE00" }} />
    case 'active_flag':
      return <IoMdFlag style={{ color: "#bb0000" }} />
    case 'active_bomb':
      return <GiRollingBomb style={{ color: "#bb0000" }} />
    default:
      return <div style={{ color: "green", fontWeight: 'bold' }}>{type}</div>
  }
}