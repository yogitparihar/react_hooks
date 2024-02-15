import React, { useMemo, useState } from "react";

export const CountMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const handleCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const handleCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(()=>{
    let i = 0
    while(i<200000000) i++
    return counterOne %2 === 0
  },[counterOne])

  return (
    <div>
      <p>Counter one: - {counterOne}</p>
      <button onClick={handleCounterOne}>Increase Counter One</button>
      <p>{isEven ?"Even":"Odd"}</p>
      <p>Counter two:- {counterTwo}</p>
      <button onClick={handleCounterTwo}>Increase counter two</button>
    </div>
  );
};
