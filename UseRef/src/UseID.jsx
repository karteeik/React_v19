import { forwardRef, useId, useRef } from "react";

export const UseID = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  const id = useId();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={id + "username"}>User Name : </label>
        <input type="text" id={id + "username"} ref={username} /> <br />
        <label htmlFor={id + "password"}>Password : </label>
        <input type="password" id={id + "password"} ref={password} /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
