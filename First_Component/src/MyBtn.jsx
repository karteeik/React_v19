// Create MyBtn Component and export in app component

// Only one default component export
// function MyBtn(){
//     return (
//         <button>Click Me</button>
//     );
// }
// export default MyBtn;

// multiple named components export
// export function MyBtn(){
//     return (
//         <button>Click Me</button>
//     );
// }

// export function MyBtn1(){
//     return (
//         <button>Click Again</button>
//     );
// }

// Mixed components
export function MyBtn(){
    return(
        <button>Click Me</button>
    );
}

export default function MyBtn1(){
    return(
        <button>Click Again</button>
    );
}
