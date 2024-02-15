import React, { memo } from 'react'

export const Count = memo(({text,count}) => {
    console.log(text)
  return (
    <div>{text} {count}</div>
  )
})
