import { useContext, useState } from 'react';
import Context from '../../context/context';
import styles from './table.module.css';
import {
    tableBodyData,
    tableHeadData,
} from '../../services/tableDataPreparing';
import * as CONSTANTS from '../../constants/constants';

export const Table = () => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(CONSTANTS.ASC);
    const [filter, setFilter] = useState('');
    const { data } = useContext(Context);

    const headData = tableHeadData(
        data,
        styles,
        filter,
        setFilter,
        sortColumn,
        setSortColumn,
        sortDirection,
        setSortDirection
    );

    const bodyData = tableBodyData(data, filter, sortColumn, sortDirection);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>{headData}</thead>
                <tbody>{bodyData}</tbody>
            </table>
        </div>
    );
};
