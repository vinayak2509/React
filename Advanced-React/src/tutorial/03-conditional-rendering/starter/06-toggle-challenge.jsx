import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(1);
  const toggle = () => {
    setValue(!value);
  };
  return (
    <div>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={toggle}>
        click Me
      </button>
      <p>{value ? "hello" : "bye"}</p>
    </div>
  );
};

export default ToggleChallenge;
