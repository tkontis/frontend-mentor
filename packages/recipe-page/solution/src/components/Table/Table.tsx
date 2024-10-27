import { FC } from 'react';
import styles from './Table.module.css';

const Table: FC<{ rows?: [string, string][] }> = ({ rows }) => {
    return (
        rows?.length && (
            <table className={styles.table}>
                <tbody>
                    {rows.map(([...cells], rowIndex) => (
                        <tr key={rowIndex}>
                            {cells?.map((cell, cellIndex) => (
                                <td key={`${rowIndex}_${cellIndex}`}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    );
};

export default Table;
