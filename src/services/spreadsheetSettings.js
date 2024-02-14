import {
    spreadsheetDataToObject,
    toSpreadsheetDataFormat,
} from './dataStructureTransformation';
import * as CONSTANTS from '../constants/constants';

export const setSpreadsheetSettings = (data) => {
    const celldata = toSpreadsheetDataFormat(data);

    let settings = {};

    return (settings = {
        data: [
            {
                name: 'Sheet', //Worksheet name
                color: 'lightgreen', //Worksheet color
                id: 0, //Worksheet id
                status: 1, //Worksheet active status
                order: 0, //The order of the worksheet
                hide: 0, //Whether worksheet hide
                row: 36, //the number of rows in a sheet
                column: 11, //the number of columns in a sheet
                defaultRowHeight: 19, //Customized default row height
                defaultColWidth: 127, //Customized default column width
                celldata: celldata, //Initial the cell data
                config: {
                    merge: {}, //merged cells
                    rowlen: {}, //Table row height
                    columnlen: {}, //Table column width
                    rowhidden: {}, //hidden rows
                    colhidden: {}, //hidden columns
                    borderInfo: {}, //borders
                    authority: {}, //Worksheet protection
                },
                scrollLeft: 0, //Left and right scroll bar position
                scrollTop: 315, //Up and down scroll bar position
                luckysheet_select_save: [], //selected area
                calcChain: [], //Formula chain
                isPivotTable: false, //Whether is pivot table
                pivotTable: {}, //Pivot table settings
                filter_select: {}, //Filter range
                filter: null, //Filter configuration
                luckysheet_alternateformat_save: [], //Alternate colors
                luckysheet_alternateformat_save_modelCustom: [], //Customize alternate colors
                luckysheet_conditionformat_save: {}, //condition format
                frozen: {}, //freeze row and column configuration
                chart: [], //Chart configuration
                zoomRatio: 1, // zoom ratio
                image: [], //image
                showGridLines: 1, //Whether to show grid lines
            },
        ],
        onChange: (data) => {
            const object = spreadsheetDataToObject(data);

            if (!object) return;

            try {
                localStorage.setItem(
                    CONSTANTS.LOCALSTORAGE_KEY,
                    JSON.stringify(object)
                );
            } catch (error) {
                console.error(error);
            }
        },
        lang: 'en',
    });
};
