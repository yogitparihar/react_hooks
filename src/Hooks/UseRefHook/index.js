import React, { useEffect, useRef } from 'react'

export const UseRefHook = () => {
    const ref = useRef()
    console.log("ref",ref)
    useEffect(()=>{
        ref.current.focus()
    },[])
  return (
    <div>
        <input ref={ref} type='text'/>
    </div>
  )
}
