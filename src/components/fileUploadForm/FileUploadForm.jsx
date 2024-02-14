import { useContext, useEffect, useState } from 'react';
import styles from './fileUploadForm.module.css';
import { Input } from '../sharedComponents/input/Input';
import { uploadFile } from '../../services/localStorage';
import { handleUploadChange } from '../../services/eventHandling';
import Context from '../../context/context';
import * as CONSTANTS from '../../constants/constants';

export const FileUploadForm = () => {
    const [file, setFile] = useState(null);
    const { setShouldUpdate } = useContext(Context);

    useEffect(() => {
        uploadFile(file, setShouldUpdate);
    }, [file]);

    return (
        <div className={styles.formContainer}>
            <form>
                <div className={styles.formControl}>
                    <Input
                        type={CONSTANTS.TYPE_FILE}
                        onChange={(event) => handleUploadChange(event, setFile)}
                    />
                </div>
            </form>
        </div>
    );
};
