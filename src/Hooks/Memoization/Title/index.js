import React, { memo } from 'react'

function Title(){
  console.log("Title")
  return(
    <div>Title</div>
  )
}

export default memo(Title)
