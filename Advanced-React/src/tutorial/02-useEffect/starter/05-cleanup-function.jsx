import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const intId = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
