export const Button = ({ children, onClick, styles }) => {
    return (
        <button className={styles} onClick={onClick}>
            {children}
        </button>
    );
};
