import { memo } from "react";

export const Button = memo(({onClick, children}) => {
    console.log(`Rendering Button : ${children}`);

    // When we click increment button then re-render two function increment and decrement why ? because new memory location of the function every time

    // this problem solution is we use callback hook use
    
    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    );
});