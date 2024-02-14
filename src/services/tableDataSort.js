import * as CONSTANTS from '../constants/constants';

export const sortTableData = (data, sortColumn, sortDirection) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        const itemA = a[sortColumn];
        const itemB = b[sortColumn];

        if (itemA === undefined || itemB === undefined) {
            return 0;
        }

        if (
            typeof itemA !== CONSTANTS.STRING ||
            typeof itemB !== CONSTANTS.STRING
        ) {
            const numberA = Number(itemA);
            const numberB = Number(itemB);

            if (sortDirection === CONSTANTS.ASC) {
                return numberA - numberB;
            } else {
                return numberB - numberA;
            }
        } else {
            if (sortDirection === CONSTANTS.ASC) {
                return itemA.localeCompare(itemB);
            } else {
                return itemB.localeCompare(itemA);
            }
        }
    });
    return sortedData;
};
