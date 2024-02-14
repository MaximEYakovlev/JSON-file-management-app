import * as CONSTANTS from '../constants/constants';
import { toast } from 'react-toastify';

export const handleUploadChange = (event, setFile) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        if (selectedFile.type === CONSTANTS.APPLICATION_JSON) {
            setFile(selectedFile);
        } else {
            toast.error(CONSTANTS.EXTENSION_JSON, {
                theme: CONSTANTS.THEME,
            });
        }
    }
};

export const handleSort = (
    header,
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection
) => {
    if (sortColumn === header) {
        setSortDirection(
            sortDirection === CONSTANTS.ASC ? CONSTANTS.DESC : CONSTANTS.ASC
        );
    } else {
        setSortColumn(header);
        setSortDirection(CONSTANTS.ASC);
    }
};

export const handleFilter = (event, setFilter) => {
    const { value } = event.target;

    setFilter(value);
};
