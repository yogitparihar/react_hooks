import React, { useState } from 'react'
import { Count } from './Count';
import { ButtonComponent } from './ButtonComponent';
import { useCallback } from 'react';

export const UseCallbakHook = () => {
    const [age,setAge] = useState(0);
    const [salary, setSalary] = useState(0)
    const increaseAge = useCallback(()=>{
        setAge(age+1)
    },[age])
    const increaseSalary = useCallback(()=>{
        setSalary(salary+1)
    },[salary])
  return (
    <div>
        <Count text='Count age' count={age}/>
        <ButtonComponent handleCount={increaseAge}>Increase age</ButtonComponent>
        <Count text='Count salary' count={salary}/>
        <ButtonComponent handleCount={increaseSalary}>Increase salary</ButtonComponent>
    </div>
  )
}
