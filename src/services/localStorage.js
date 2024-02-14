import { objectToArray } from './dataStructureTransformation';
import * as CONSTANTS from '../constants/constants';
import { toast } from 'react-toastify';

export const uploadFile = (file, setShouldUpdate) => {
    if (file) {
        const fileReader = new FileReader();

        fileReader.onload = (event) => {
            const fileContent = event.target.result;

            try {
                localStorage.setItem(CONSTANTS.LOCALSTORAGE_KEY, fileContent);

                toast.success(CONSTANTS.FILE_SAVED, {
                    theme: CONSTANTS.THEME,
                });

                setShouldUpdate((previousState) => !previousState);
            } catch (error) {
                console.error(error);
            }
        };
        fileReader.readAsText(file);
    }
};

export const getLocalStorageItem = (setData) => {
    try {
        const json = localStorage.getItem(CONSTANTS.LOCALSTORAGE_KEY);
        const object = JSON.parse(json);
        const array = objectToArray(object);

        if (array) {
            setData(array);
        }
    } catch (error) {
        console.error(error);
    }
};
