import React from "react";
import { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "Hello!";
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.innerText = "Goodbye";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <labe htmlFor="name">Name</labe>
        <input
          type="text"
          id="name"
          className="form-control mb-2"
          ref={inputRef}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus} ref={paraRef}></p>
      </form>
    </div>
  );
}

export default UseRefExample1;
