import { v4 as uuidv4 } from 'uuid';
import { Input } from '../components/sharedComponents/input/Input';
import { sortTableData } from './tableDataSort';
import { filterTableData } from './tableDataFilter';
import { handleFilter, handleSort } from './eventHandling';
import * as CONSTANTS from '../constants/constants';

export const tableHeadData = (
    data,
    styles,
    filter,
    setFilter,
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection
) => {
    if (!data) return;

    const objectKeys = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <>
            <tr>
                <th>
                    <Input
                        type={CONSTANTS.TYPE_TEXT}
                        value={filter}
                        onChange={(event) => handleFilter(event, setFilter)}
                        placeholder={CONSTANTS.PLACEHOLDER_FILTER}
                    />
                </th>
            </tr>
            <tr>
                {objectKeys.map((header) => (
                    <th
                        key={uuidv4()}
                        onClick={() =>
                            handleSort(
                                header,
                                sortColumn,
                                setSortColumn,
                                sortDirection,
                                setSortDirection
                            )
                        }
                    >
                        {header}
                        {showArrow(header, sortColumn, sortDirection, styles)}
                    </th>
                ))}
            </tr>
        </>
    );
};

export const tableBodyData = (data, filter, sortColumn, sortDirection) => {
    if (!data) return;

    const filteredData = filterTableData(data, filter);

    const sortedData = sortTableData(filteredData, sortColumn, sortDirection);

    return sortedData.map((item) => (
        <tr key={uuidv4()}>
            {Object.values(item).map((value) => (
                <td key={uuidv4()}>{value}</td>
            ))}
        </tr>
    ));
};

const showArrow = (header, sortColumn, sortDirection, styles) => {
    return (
        sortColumn === header && (
            <span
                className={
                    sortDirection === CONSTANTS.ASC
                        ? styles.arrowUp
                        : styles.arrowDown
                }
            ></span>
        )
    );
};
