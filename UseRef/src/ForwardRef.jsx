import { forwardRef, useId, useRef } from "react";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <MyInput
          label="username"
          ref={username}
          placeholder="Enter Username"
          type="text"
        />{" "}
        <br />
        <MyInput
          label="password"
          ref={password}
          placeholder="Enter Password"
          type="password"
        />{" "}
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

// Child Component - before react version 19
// const MyInput = forwardRef((props, ref) => {
//   const id = useId();

//   return (
//     <>
//       <label htmlFor={id}>{props.label}</label>
//       <input type={props.type} ref={ref} placeholder={props.placeholder} />
//     </>
//   );
// });

// After React Version 19
const MyInput = ({ label, type, placeholder, ref}) => {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} ref={ref} placeholder={placeholder} />
    </>
  );
};
