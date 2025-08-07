import { useState } from "react";

// Derived state is state that can be computed from existing props or state — instead of storing it directly, you calculate it on the fly.

// why use ? Storing values that can be calculated from other state/props can lead to bugs and inconsistencies.

// const total = items.reduce(...)
// const filteredList = allItems.filter(...)
// const isValid = formValues.email.includes('@')

const DerivedState = () => {
  const [products, setProduct] = useState([
    {
      name: "john",
      age: 23,
      gender: "male",
      salary: 23900,
    },
    {
      name: "alice",
      age: 22,
      gender: "male",
      salary: 21900,
    },
    {
      name: "bottam",
      age: 19,
      gender: "male",
      salary: 43900,
    },
    {
      name: "alisa",
      age: 28,
      gender: "female",
      salary: 67900,
    },
  ]);

  //   productsCount is Derived State : Total is calculated from salary
  const productsCount = products.length;
  // reduce method , filter
  const salaryCount = products.reduce(
    (accum, currElm) => accum + currElm.salary,
    0
  );
  const avgSalary = products.reduce(
    (accum, currElm) => accum + currElm.salary / productsCount,
    0
  );

  return (
    <>
      <ul>
        {/* {products.map((currItem, index) => {
          return (
            <li key={index}>
              Name: {currItem.name} | Age: {currItem.age} | Gender:{" "}
              {currItem.gender} | Salary: ₹{currItem.salary}
            </li>
          );
        })} */}
      </ul>

      <h2>The Number of Data is : {productsCount}</h2>
      <h2>The Total Salary is : {salaryCount}</h2>
      <h2>The Average Salary is : {avgSalary}</h2>
    </>
  );
};

export default DerivedState;
