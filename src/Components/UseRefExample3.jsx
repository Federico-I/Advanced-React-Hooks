import React from "react";
import ToDo from "./ToDo";
import { useState } from "react";

function UseRefExample3() {
  const [showToDo, setShowToDo] = useState(true);

  return (
    <div>
      {showToDo && <ToDo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowToDo(!showToDo)}
      >
        Toggle ToDo
      </button>
    </div>
  );
}

export default UseRefExample3;
