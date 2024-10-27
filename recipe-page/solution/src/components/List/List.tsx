import { FC, ReactElement } from 'react';
import { ItemProps } from '../Item';
import styles from './List.module.css';

const List: FC<{ items: ReactElement<ItemProps>[]; numeric?: boolean }> = ({ items, numeric }) => {
    const ListElement = numeric ? 'ol' : 'ul';

    return <ListElement className={styles.list}>{items}</ListElement>;
};

export default List;
