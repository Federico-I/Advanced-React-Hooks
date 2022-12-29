import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const sqRoot = useMemo(() => getSqRoot(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        className="form-control w-25"
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2 className="my-3">
        The Square number of {number} is {sqRoot}
      </h2>
      <button onClick={onClick} className="btn btn-primary"></button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSqRoot(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log("Expensive Funtion Called!");
  return Math.sqrt(n);
}

export default UseMemoExample;
