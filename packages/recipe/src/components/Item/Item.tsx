import { FC, ReactNode } from 'react';
import styles from './Item.module.css';

export type ItemProps = { title?: string; children: ReactNode };

const Item: FC<ItemProps> = ({ title, children }) => {
    return (
        <li className={styles.li}>
            <div className={styles.content}>
                {title && <strong>{title}:&nbsp;</strong>}
                {children}
            </div>
        </li>
    );
};

export default Item;
