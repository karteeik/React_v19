import styles from './InputBox.module.css';

export const InputBox = () => {
    return (
        <>
            <input type="text" className={styles} disabled/>
        </>
    );
}