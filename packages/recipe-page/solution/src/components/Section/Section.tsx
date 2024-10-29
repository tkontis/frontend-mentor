import { FC, ReactNode } from 'react';
import Title from '@mentor/recipe/components/Title';
import styles from './Section.module.css';

const Section: FC<{ title: string; highlighted?: boolean; children?: ReactNode }> = ({
    title,
    highlighted,
    children,
}) => {
    return (
        <section className={highlighted ? styles.highlighted : undefined}>
            <Title>{title}</Title>

            {children}
        </section>
    );
};

export default Section;
