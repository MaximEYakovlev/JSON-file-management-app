import { useEffect, useState } from 'react';

import styles from './app.module.css';
import { Container } from '../container/Container';
import { Button } from '../sharedComponents/button/Button';
import { getLocalStorageItem } from '../../services/localStorage';
import { toggle, toggleView } from '../../services/toggle';
import { setSpreadsheetSettings } from '../../services/spreadsheetSettings';
import Context from '../../context/context';

import { Workbook } from '@fortune-sheet/react';
import '@fortune-sheet/react/dist/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    const [data, setData] = useState([]);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [isSpreadsheetView, setIsSpreadsheetView] = useState(false);

    const toggleButtonContent = toggle(isSpreadsheetView);
    const settings = setSpreadsheetSettings(data);

    useEffect(() => {
        getLocalStorageItem(setData);
    }, [shouldUpdate]);

    return (
        <Context.Provider value={{ data, setShouldUpdate }}>
            <Button
                onClick={() =>
                    toggleView(setIsSpreadsheetView, setShouldUpdate)
                }
                styles={styles.button}
            >
                {toggleButtonContent}
            </Button>
            {isSpreadsheetView ? <Workbook {...settings} /> : <Container />}
            <ToastContainer />
        </Context.Provider>
    );
};
