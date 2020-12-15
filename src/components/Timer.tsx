import React, { useState, useEffect, FunctionComponent, useRef } from 'react'
import { FiClock } from 'react-icons/fi'

type TimerProps = {
  isRefresh: boolean
  isWin: boolean
  setWinTime: (time: number) => void
  isLose: boolean
}

const Timer: FunctionComponent<TimerProps> = ({ isRefresh, isWin, setWinTime, isLose }) => {
  let [time, setTime] = useState(0);

  const intervalID = useRef(0);

  const startInterval = () => {
    intervalID.current = setInterval(() => {
      time++
      setTime(time)
      if (time === 999) {
        clearInterval(intervalID.current)
      }
    }, 1000);
  }

  const stopInterval = () => {
    clearInterval(intervalID.current);
    setTime(0)
  }

  useEffect(() => {
    return () => stopInterval();
  }, []);

  useEffect(() => {
    if (isRefresh) {
      stopInterval();
    } else {
      startInterval()
    }
  }, [isRefresh]);

  useEffect(() => {
    if (isWin) {
      clearInterval(intervalID.current);
      setWinTime(time)
    }
    if (isLose) {
      clearInterval(intervalID.current);
    }
  }, [isWin, isLose]);

  return (
    <>
      <FiClock style={{ marginLeft: 30 }} />
      <span style={{ fontSize: 20, margin: 5 }}>
        {("000" + time).slice(-3)}
      </span>
    </>
  )
}

export default Timer;