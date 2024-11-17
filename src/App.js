import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    let interval = null;

    if (check) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!check && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [check]);

  const formatTime = (time) => {
    const min = Math.floor(time / 60000);
    const sec = Math.floor((time % 60000) / 1000);

    return `${min.toString().padStart(1, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <div
        style={{
          fontSize: "2rem",
          fontFamily: "monospace",
          margin: "20px 0",
        }}
      >
        Time: {formatTime(time)}
      </div>
      <div>
        <button onClick={() => setCheck((prev) => !prev)}>
          {check ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setCheck(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
