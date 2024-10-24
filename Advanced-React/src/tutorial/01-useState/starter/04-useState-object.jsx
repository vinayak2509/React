import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "reading books",
  });

  const update = () => {
    setPerson({ name: "john", age: 28, hobby: "Screaming at the computer" });
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <h2>useState object example</h2>;
      <button className="btn" onClick={update}>
        show next
      </button>
    </div>
  );
};

export default UseStateObject;
