export const Index = () => {
  const myName = "kartik";
  const myAge = 20;
  return (
    <>
      <h1>Component A</h1>
      <Grand data={{ myName, myAge }} />
    </>
  );
};

const Grand = ({ data }) => {
  return (
    <>
      <h1>Component B</h1>
      <Child data={data} />
    </>
  );
};

const Child = ({ data }) => {
  return (
    <>
      <h1>Component C</h1>
      <h1>
        Hello, my name is {data.myName} and my age is {data.myAge}
      </h1>
    </>
  );
};
