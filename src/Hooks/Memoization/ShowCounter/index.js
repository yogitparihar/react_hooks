import React from "react";

export const ShowCounter = ({ count }) => {
  console.log("show count");
  return (
    <div>
      <p>Count:- {count}</p>
    </div>
  );
};
