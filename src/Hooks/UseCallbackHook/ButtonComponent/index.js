import React, { memo } from 'react'

export const ButtonComponent = memo(({handleCount,children}) => {
    console.log(children)
  return (
    <div>
        <button onClick={handleCount}>{children}</button>
    </div>
  )
})
