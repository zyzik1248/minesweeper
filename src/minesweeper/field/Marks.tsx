import React from 'react'
import { IoMdFlag, IoMdFlower } from 'react-icons/io'
import { GiRollingBomb, GiSpiralLollipop } from 'react-icons/gi'
import { BsFillQuestionDiamondFill } from 'react-icons/bs'
import { Themes } from '../../reducers/gameTheme/types'

export const color = (theme: Themes) => {
  switch (theme) {
    case Themes.blue:
      return '#3e67ce'
    case Themes.green:
      return '#1C951C'
    case Themes.pink:
      return '#FF9999'
  }
}

export const marks = (theme: Themes, type: String) => {
  switch (theme) {
    case Themes.blue:
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
    case Themes.green:
      switch (type) {
        case 'bomb':
          return <IoMdFlower style={{ color: "#012601" }} />
        case 'flag':
          return <IoMdFlag style={{ color: "#012601" }} />
        case 'question':
          return <BsFillQuestionDiamondFill style={{ color: "#012601" }} />
        case 'active_flag':
          return <IoMdFlag style={{ color: "#bb0000" }} />
        case 'active_bomb':
          return <IoMdFlower style={{ color: "#bb0000" }} />
        default:
          return <div style={{ color: "#1DB6B6", fontWeight: 'bold' }}>{type}</div>
      }
    case Themes.pink:
      switch (type) {
        case 'bomb':
          return <GiSpiralLollipop style={{ color: "#cc0066", fontSize: 30 }} />
        case 'flag':
          return <IoMdFlag style={{ color: "#cc0066" }} />
        case 'question':
          return <BsFillQuestionDiamondFill style={{ color: "#cc0066" }} />
        case 'active_flag':
          return <IoMdFlag style={{ color: "#bb0000" }} />
        case 'active_bomb':
          return <GiSpiralLollipop style={{ color: "#bb0000", fontSize: 30 }} />
        default:
          return <div style={{ color: "#3F0041", fontWeight: 'bold' }}>{type}</div>
      }
  }
}
