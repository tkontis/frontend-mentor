import { FC, ReactElement } from 'react';
import { ItemProps } from '@mentor/recipe/components/Item';
import { addKeysToElementList } from '@mentor/recipe/utilities';
import styles from './List.module.css';

const List: FC<{ items: ReactElement<ItemProps>[]; numeric?: boolean }> = ({ items, numeric }) => {
    const ListElement = numeric ? 'ol' : 'ul';
    const itemsWithKeys = addKeysToElementList(items);

    return <ListElement className={styles.list}>{itemsWithKeys}</ListElement>;
};

export default List;
