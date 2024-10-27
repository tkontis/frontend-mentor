import { FC, ReactNode } from 'react';
import styles from './Section.module.css';

const Section: FC<{ title: string; highlighted?: boolean; children?: ReactNode }> = ({
    title,
    highlighted,
    children,
}) => {
    return (
        <section className={highlighted ? styles.highlighted : undefined}>
            <h1>{title}</h1>

            {children}
        </section>
    );
};

export default Section;
