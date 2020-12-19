import React, { useState, useEffect, FunctionComponent, useRef } from 'react'
import { FiClock } from 'react-icons/fi'

type TimerProps = {
  isRefresh: boolean
  isWin: boolean
  setWinTime: (tine: number) => void
  isLose: boolean
}

const Timer: FunctionComponent<TimerProps> = ({ isRefresh, isWin, setWinTime, isLose }) => {
  let [time, setTime] = useState(0);

  let intervalID = useRef(0);

  const startInterval = () => {
    intervalID.current = setInterval(() => {
      setTime(time => {
        if (time + 1 === 999) {
          clearInterval(intervalID.current)
        }
        return time + 1
      })
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
      setTime(time => {
        setWinTime(time)
        return time
      })
    }
    if (isLose) {
      clearInterval(intervalID.current);
    }
  }, [setWinTime, isWin, isLose]);

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