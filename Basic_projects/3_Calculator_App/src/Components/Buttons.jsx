import styles from "./Buttons.module.css";

export const Buttons = () => {
  const ButtonGroup = [
     "+",
    "-",
    "*",
    "=",
    "/",
    "1",
    "2",
    "3",
    "0",
    "4",
    "5",
    "6",
    ".",
    "7",
    "8",
    "9",
  ];
  return (
    <>
      <div className={styles.btnContainer}>
        {ButtonGroup.map((button) => (
          <button className={styles.btns}>{button}</button>
        ))}
      </div>
    </>
  );
};
