import { useState } from "react";

const products = [
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
];

// Using Map Method
// const StateChallenge = () => {
//   return (
//     <>
//       <ul>
//         {products.map((currElem, index) => {
//           return (
//             <li key={index}>
//               {currElem.name} / {currElem.age} / {currElem.gender} /{" "}
//               {currElem.salary}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// Using useState
const StateChallenge = () => {
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

  return (
    <>
      <ul>
        {products.map((currItem, index) => {
          return(
            <li key={index}>
            Name: {currItem.name} | Age: {currItem.age} | Gender:{" "}
            {currItem.gender} | Salary: ₹{currItem.salary}
          </li>
          )
        })}
      </ul>
    </>
  );
};

export default StateChallenge;
