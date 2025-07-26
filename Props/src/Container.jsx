// Passing Children -  new topic

// children is a special prop in React.

// In React, passing children means sending content between the opening and closing tags of a component — allowing flexible and reusable UI blocks.

// Whatever you write between <Component>...</Component> gets passed as children

// first way - better

import styles from './Container.module.css';

export const Container = ({children}) => {
  return <div className={styles.Container}>
    {children}
  </div>;
};

// second way

// export const Container = (prop) => {
//   return <>
//     {prop.children}
//   </>;
// };

// let's create some CSS