import React from "react";
import ProductsCard from "./ProductsCard";
import Products from "./Data/Products.json";

function App() {
  return (
    <div>
      <h1>My Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Products.map((Products) => (
          <ProductsCard
            key={Products.id}
            name={Products.name}
            price={Products.price}
            image={Products.image}
          />
        ))}
      </div>
    </div>
  );

  // return (
  //   <>
  //     {/* A parent component passes props to a child component. */}
  //     <Greeting name="kartik" />
  //   </>
  // );

  // The child receives those props as a parameter (usually as an object).
  // function Greeting(props) {
  //   return (
  //     <>
  //       {/* The child component can use and display the data. */}
  //       <h1>Hello, {props.name} !</h1>
  //     </>
  //   );
  // }

  // Destructuring Props
  // function Greeting({ name }) {
  //   return <h1>Hello, {name} !</h1>;
  // }
}

// Key Points -

// Props are read-only (you cannot change them inside the child component).
// They help make components modular and reusable.
// Props can be of any type: string, number, array, object, function, etc.

export default App;
