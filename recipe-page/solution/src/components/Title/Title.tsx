import { FC, ReactNode } from 'react';
import styles from './Title.module.css';

const Title: FC<{ main?: boolean; children?: ReactNode }> = ({ main, children }) => {
    const Element = main ? 'h1' : 'h2';

    return <Element className={main ? styles.h1 : styles.h2}>{children}</Element>;
};

export default Title;
