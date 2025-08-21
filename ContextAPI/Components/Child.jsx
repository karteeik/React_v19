import { useContext } from "react"
import { NameContext } from "./GrandParent"

export const Child = () => {

    const {myName, myAge} = useContext(NameContext);

    return (
        <>
            <h1>My Name is {myName} and My Age is {myAge} </h1>
        </>
    )
}