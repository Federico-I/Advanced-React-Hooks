import React from "react";
import { useState, useEffect, useRef } from "react";

function UseRefExample2() {
  const [name, setName] = useState("");

  const render = useRef(1);
  // get previous render
  const prevName = useRef("");

  useEffect(() => {
    render.current = render.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Render: {render.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}

export default UseRefExample2;
