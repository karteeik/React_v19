import { useState } from "react";

export const FAQ = ({ currElem, isActive, onToggle }) => {
  const { question, answer } = currElem;

  return (
    <>
      <div className="main">
        <div className="main-box">
          <p>{question}</p>
          <button onClick={onToggle}>{isActive ? "close" : "show"}</button>
        </div>
        <p>{isActive && answer}</p>
      </div>
    </>
  );
};
