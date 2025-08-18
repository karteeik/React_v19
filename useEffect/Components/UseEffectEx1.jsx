import { useEffect } from "react";

// Component LifeCycle => Construction(Create Component) -> Mount(render the Component) -> Updation(State Value Update) -> UnMount(Component close)

const UseEffectEx1 = () => {
  // When reload the page
  useEffect(() => {
    alert("Component is Mounted");

    return() => {
        alert("Component is UnMounted")
    }
  }, []);

  // Mount(render the Component
//   useEffect(() => {
//     console.log("Component is Mounted");
//   }, []);

  return <></>;
};

export default UseEffectEx1;
