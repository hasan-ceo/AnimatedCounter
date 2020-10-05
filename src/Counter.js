import React, { useState, useEffect, useRef } from "react";

function Counter({ to }) {
  const [count, setCount] = useState(0);
  let interval = useRef();

  var ct = count;

  const startCounter = () => {
    interval = setInterval(() => {
      if (ct < to) {
        ct = ct + 100;
      } else {
        ct = to;
        clearInterval(interval.current);
      }
      setCount(ct);
    }, 5);
  };

  useEffect(() => {
    console.log("test");
    startCounter();
    return () => {
      clearInterval(interval.current);
    };
  }, [count]);

  return <>{count}</>;
}

export default Counter;
