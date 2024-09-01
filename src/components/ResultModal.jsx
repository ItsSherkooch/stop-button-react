import React, {forwardRef} from 'react'
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal( {target, remainingTime, onReset}, ref ) {

  const userLost = remainingTime <= 0;
  return createPortal(
    <dialog ref={ref} className='result-modal'>
      {userLost ? <h2>You Lost</h2> : <h2>You Won!</h2>}
      <p>The target time was <strong>{target} seconds.</strong></p>
      <p>You stopped the timer with <strong>{remainingTime/1000} seconds left.</strong></p>
      <form action="method" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModal;