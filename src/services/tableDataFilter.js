export const filterTableData = (data, filter) => {
    return data.filter((item) => {
        const values = Object.values(item).join(' ').toLowerCase();
        const filterValue = filter.toLowerCase();

        return values.includes(filterValue);
    });
};
