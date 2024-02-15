import React, { useState } from 'react'
import { ShowCounter } from '../ShowCounter'
import  Title  from '../Title'

export const Counter = () => {
    const [count,setCount] = useState(0)
    console.log("run count")
  return (
    <div>
        <ShowCounter count={count}/>
        <button onClick={()=>setCount(count+1)}>Increment</button>
       <Title/>
    </div>
  )
}
