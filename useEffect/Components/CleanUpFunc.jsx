import { useEffect } from "react";
import { useState } from "react";

export const CleanUpFunc = () => {
  const [Time, setTime] = useState();

  // it's not Good Practice - Memory loss
  // This setInterval runs every render (because it’s in the component body).

  //React re-renders whenever you call setTime.

  //That means on every re-render, a new interval is created → you end up with multiple timers running at once (memory leak + performance issues).
  //   setInterval(() => {
  //     const currTime = new Date();
  //     const UpdatedTime = currTime.toLocaleTimeString();
  //     setTime(UpdatedTime);
  //   }, 1000);

  useEffect(() => {
    const Interval = setInterval(() => {
      const currTime = new Date();
      const UpdatedTime = currTime.toLocaleTimeString();
      setTime(UpdatedTime);
    }, 1000);

    return () => clearInterval(Interval );
  }, []);

  return (
    <>
      <h1>{Time}</h1>
    </>
  );
};
