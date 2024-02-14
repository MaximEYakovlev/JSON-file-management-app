import { FileUploadForm } from '../fileUploadForm/FileUploadForm';
import { Table } from '../table/Table';
import styles from './fileUploadContainer.module.css';

export const Container = () => {
    return (
        <div className={styles.container}>
            <div className={styles.uploadForm}>
                <FileUploadForm />
            </div>
            <div className={styles.dataTable}>
                <Table />
            </div>
        </div>
    );
};
