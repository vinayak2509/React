import { useState } from "react";

const UseStateGotcha = () => {
  const [num, setNum] = useState(0);

  const update = () => {
    setTimeout(() => {
      setNum((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h3>{num}</h3>
      <button className="btn" onClick={update}>
        click me
      </button>
    </div>
  );
};

export default UseStateGotcha;
