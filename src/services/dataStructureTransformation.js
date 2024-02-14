import * as CONSTANTS from '../constants/constants';

export const objectToArray = (object) => {
    const modifiedObject = {};
    const resultArray = [];

    const sourceObjectKeys = Object.keys(object);
    sourceObjectKeys.forEach((key) => {
        modifiedObject[key] = Object.values(object[key]);
    });
    const nestedArrayItemsNumber = modifiedObject[sourceObjectKeys[0]].length;

    for (let i = 0; i < nestedArrayItemsNumber; i++) {
        const item = {};

        sourceObjectKeys.forEach((key) => {
            item[key] = modifiedObject[key][i];
        });

        resultArray.push(item);
    }
    return resultArray;
};

export const toSpreadsheetDataFormat = (array) => {
    if (!array) return;

    const arrayLength = array.length;
    const resultArray = [];

    for (let i = 0; i < arrayLength; i++) {
        const objectFieldsNumber = Object.keys(array[i]).length;
        const objectFieldsKeys = Object.keys(array[i]);

        for (let j = 0; j < objectFieldsNumber; j++) {
            const object = {
                r: i,
                c: j,
                v: {
                    m: array[i][objectFieldsKeys[j]],
                    v: array[i][objectFieldsKeys[j]],
                    ct: {
                        fa: 'General',
                        t: 'g',
                    },
                },
            };
            resultArray.push(object);
        }
    }
    return resultArray;
};

export const spreadsheetDataToObject = (data) => {
    const string = localStorage.getItem(CONSTANTS.LOCALSTORAGE_KEY);
    if (!string) return;
    const object = JSON.parse(string);
    const objectKeysArray = Object.keys(object);
    const objectKeysNumber = objectKeysArray.length;
    const spreadsheetDataArray = data[0]['data'];
    const spreadsheetDataArrayLength = spreadsheetDataArray.length;
    const resultObject = {};
    let auxiliaryObject = {};

    for (let i = 0; i < objectKeysNumber; i++) {
        resultObject[objectKeysArray[i]] = auxiliaryObject;

        for (let j = 0; j < spreadsheetDataArrayLength; j++) {
            auxiliaryObject[j] = spreadsheetDataArray[j][i]?.['m'];
        }
        auxiliaryObject = {};
    }
    return resultObject;
};
