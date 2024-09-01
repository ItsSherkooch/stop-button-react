import React, { useRef, useState } from 'react'
import Modal from './ResultModal';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
  
  const timer = useRef()
  const dialog = useRef()

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current)
    dialog.current.showModal()
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 10)
    }, 10);
  }

  function handleReset() {
    setTimeRemaining(targetTime*1000)
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  return (
    <>
    <ResultModal 
      ref={dialog}
      target={targetTime} 
      remainingTime={timeRemaining}
      onReset={handleReset}
    />
    <section className='challenge'>
      <h2>{title}</h2>
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
        {timerIsActive ? 'Stop Timer' : 'Start Timer'}
        </button>
      </p>
      <p className={timerIsActive ? 'active' : undefined}>
        {timerIsActive ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
    </>
  )
}
