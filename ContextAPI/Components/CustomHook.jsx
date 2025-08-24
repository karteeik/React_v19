// import { useContext } from "react";
// import { NameContext } from "./GrandParent";
// instead of using Custome Hook
import { useMyData } from "./GrandParent";

export const CustomHook = () => {
  const { myName, myAge } = useMyData();

  return (
    <>
      <h1>
        My Name is (custom hook) {myName} and My Age is {myAge}{" "}
      </h1>
    </>
  );
};
