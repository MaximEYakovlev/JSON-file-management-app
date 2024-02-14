import * as CONSTANTS from '../constants/constants';

export const toggleView = (setIsSpreadsheetView, setShouldUpdate) => {
    setIsSpreadsheetView((previousState) => !previousState);
    setShouldUpdate((previousState) => !previousState);
};

export const toggle = (isSpreadsheetView) => {
    return isSpreadsheetView ? CONSTANTS.REACT_TABLE : CONSTANTS.SPREAD_SHEET;
};
