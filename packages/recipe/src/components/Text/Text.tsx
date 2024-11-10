import { FC, ReactNode } from 'react';
import styles from './Text.module.css';

const Text: FC<{ children?: ReactNode }> = ({ children }) => {
    return <p className={styles.p}>{children}</p>;
};

export default Text;
