import { FC, ReactNode } from 'react';
import classnames from 'classnames';
import Title from '@mentor/recipe/components/Title';
import styles from './Section.module.css';

const Section: FC<{ title: string; highlighted?: boolean; children?: ReactNode }> = ({
    title,
    highlighted,
    children,
}) => {
    return (
        <div className={styles.container}>
            <section
                className={classnames(
                    highlighted ? styles.highlighted : undefined,
                    styles.container
                )}>
                <Title className={styles.title}>{title}</Title>

                {children}
            </section>
        </div>
    );
};

export default Section;
