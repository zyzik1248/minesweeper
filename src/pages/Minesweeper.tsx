import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Board from '../minesweeper/board/Board'
import Timer from './../components/Timer'
import { IoMdFlag } from 'react-icons/io'
import { BiSmile, BiSad } from 'react-icons/bi'
import { Wrapper, Menu } from './Minesweeper.css'
import Modal from './../components/modal/Modal'
import { RootState } from './../reducers/index'
import WinModal from './../components/winModal/WinModal'

const Minesweeper = () => {
  const selectorParameters = useSelector((state: RootState) => state.gameParameters)
  const selectorThemes = useSelector((state: RootState) => state.gameTheme)

  const [width, setWidth] = useState(selectorParameters.width)
  const [height, setHeight] = useState(selectorParameters.height)
  const [mines, setMines] = useState(selectorParameters.mines)
  const [isLose, setIsLose] = useState(false)
  const [isWin, setIsWin] = useState(false)
  const [winTime, setWinTime] = useState(0)
  const [isRefresh, setIsRefresh] = useState(false)
  const [flags, setFlags] = useState(selectorParameters.mines)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [theme, setTheme] = useState(selectorThemes.theme)

  useEffect(() => {
    if (isWin) {
      setTimeout(() => {
        setIsOpenModal(true)
      }, 500);
    }
  }, [isWin]);

  useEffect(() => {
    setWidth(selectorParameters.width)
    setHeight(selectorParameters.height)
    setMines(selectorParameters.mines)
    setTheme(selectorThemes.theme)
    setFlags(selectorParameters.mines)
    refresh();
  }, [selectorParameters, selectorThemes]);

  const restart = () => {
    setFlags(selectorParameters.mines)
    refresh()
  }

  const refresh = () => {
    setIsLose(false)
    setIsRefresh(true)
    setIsWin(false)

    setTimeout(() => {
      setIsRefresh(false)
    }, 10);
  }

  return (
    <Wrapper>
      <Modal startOpen={isOpenModal} close={() => setIsOpenModal(false)}>
        <WinModal
          time={winTime}
          width={width}
          height={height}
          mines={mines}
          level={selectorParameters.level}
          closeModal={() => setIsOpenModal(false)}
        />
      </Modal>
      <Menu>
        <IoMdFlag />
        <span style={{ fontSize: 20, marginRight: 30 }}>
          {flags}
        </span>
        {
          isLose ?
            (<BiSad style={{ cursor: 'pointer' }} onClick={restart} />) :
            (<BiSmile style={{ cursor: 'pointer' }} onClick={restart} />)
        }
        <Timer
          isRefresh={isRefresh}
          isWin={isWin}
          setWinTime={setWinTime}
          isLose={isLose}
        />
      </Menu>
      {
        !isRefresh ?
          <Board
            width={width}
            height={height}
            mines={mines}
            setFlags={setFlags}
            setIsLose={setIsLose}
            isLose={isLose}
            setIsWin={setIsWin}
            theme={theme}
          /> : null
      }
    </Wrapper>
  )
}

export default Minesweeper;