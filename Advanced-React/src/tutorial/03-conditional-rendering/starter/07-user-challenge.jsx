import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const [log, setLog] = useState(false);
  const [btn, setBtn] = useState("log-in");

  const login = () => {
    setUser("vinayak");
    setLog(true);
    setBtn("log-out");
  };
  const logout = () => {
    setUser(null);
    setLog(false);
    setBtn("log-in");
  };

  return (
    <div>
      <h2>user challenge</h2>
      <h4>{user ? "Hello there " + user : "Please Log-in"}</h4>
      <button className="btn" onClick={log ? logout : login}>
        {btn}
      </button>
    </div>
  );
};

export default UserChallenge;
