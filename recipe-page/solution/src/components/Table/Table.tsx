import { FC } from 'react';
import styles from './Table.module.css';

const Table: FC<{ rows?: [string, string][] }> = ({ rows }) => {
    return (
        rows?.length && (
            <table>
                <tbody>
                    {rows.map(([...cells]) => (
                        <tr>{cells?.map(cell => <td>{cell}</td>)}</tr>
                    ))}
                </tbody>
            </table>
        )
    );
};

export default Table;
