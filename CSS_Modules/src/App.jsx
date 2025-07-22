import Styles from "./App.module.css";

function App() {
  // Why use CSS Module? - CSS Modules solve real problems in large or component-based applications like those built with React, Next.js, or Vite.

  // CSS Modules are a way to write CSS that's scoped locally by default. This means your styles won't accidentally apply to other components or parts of the application, solving the problem of global CSS conflicts.

  // When you import them into your component, you get a JavaScript object where each class name becomes a property.

  // You must use the .module.css or .module.scss filename for CSS Modules to work.
  return (
    <>
      {console.log(Styles)}
      {/* two way to define */}

      {/* <h1 className={Styles.header}>Uses of CSS Modules</h1> */}
      <h1 className={Styles["header"]}>Uses of CSS Modules</h1>
      <h1 className={Styles["header"]}>Uses of CSS Modules</h1>
    </>
  );
}

export default App;
