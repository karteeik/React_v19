function Hello() {
  let myName = "John";
  function Profession() {
    return "Software Engineer";
  }

  return (
    <div>
      <p>My Name is {myName} </p>
      <h1>I am {Profession()} </h1>
    </div>
  );
}

export function Random() {
     let number = Math.random() * 100;
  return (
      <h2>Your Choice is here : {Math.round(number)}</h2>
  );
}

export default Hello;
