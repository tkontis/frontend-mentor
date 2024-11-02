import { FC, ReactNode } from 'react';
import styles from './Title.module.css';
import classnames from 'classnames';

const Title: FC<{ main?: boolean; className?: string; children?: ReactNode }> = ({
    main,
    children,
    className,
}) => {
    const Element = main ? 'h1' : 'h2';

    return (
        <Element className={classnames(main ? styles.h1 : styles.h2, className)}>
            {children}
        </Element>
    );
};

export default Title;
