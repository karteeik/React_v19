// import { useContext } from "react"
import { use } from "react"
import { NameContext } from "./GrandParent"

export const Child = () => {

    // const {myName, myAge} = useContext(NameContext);
    const {myName, myAge} = use(NameContext);

    return (
        <>
            <h1>My Name is (child) {myName} and My Age is {myAge} </h1>
        </>
    )
}