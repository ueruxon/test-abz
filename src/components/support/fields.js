import React from 'react';
import Dropzone from 'react-dropzone';

import styles from './index.scss';

export const CustomInput = props => {
    const { meta, label, placeholder } = props;

    return (
        <div className={styles.formGroup}>
            <label className={styles.text}>{label}</label>
            <input
                {...props.input}
                type={props.type}
                className={styles.formControl}
                placeholder={placeholder}
            />
            {meta.error &&
                meta.touched && (
                    <span className={styles.errorMessage}>{meta.error}</span>
                )}
        </div>
    );
};

export const CustomSelect = props => {
    const { meta, label, setTypeValue, typeValue } = props;
    
    return (
        <div className={styles.formGroup}>
            <label className={styles.text}>{label}</label>
            <select
                {...props.input}
                className={`${styles.formControl} ${styles.customSelect}`}
                onChange={event => setTypeValue(event)}
                value={typeValue}
            >
                <option />
                {props.types.map((type, i) => (
                    <option key={i} value={i+1}>
                        {type.name}
                    </option>
                ))}
            </select>
            {meta.error &&
                meta.touched && (
                    <span className={styles.errorMessage}>{meta.error}</span>
                )}
        </div>
    );
};

export const CustomTextArea = props => {
    const { meta, name, changeTextArea, textArea } = props;

    return (
        <div className={styles.formGroup}>
            <div className={styles.textContent}>
                <span className={styles.textS}>Description *</span>
                <span className={styles.textS}>{`(${textArea.length}/1000)`}</span>
            </div>
            <textarea
                name={name}
                {...props.input}
                cols="30"
                rows="10"
                value={textArea}
                maxLength="1000"
                onChange={(e) => changeTextArea(e.target.value)}
                className={`${styles.formControl} ${styles.area}`}
            />
            {meta.error &&
                meta.touched && (
                    <span className={styles.errorMessage}>{meta.error}</span>
                )}
        </div>
    );
};

// ----------- UPLOAD FILE ------------

export const FileUpload = ({ upLoadFile, files }) => {
    return (
        <div className={styles.imagesWrapper}>
            {files.map((file, i) => (
                <img key={i} src={file.preview} alt="" />
            ))}
            <Dropzone
                className={styles.loadButton}
                onDrop={upLoadFile}
                accept="image/*"
                maxSize={5e+6}
            >
                <div>Add photo</div>
                <span>Minimum size of 300x300 jpeg ipg png 5 MB</span>
            </Dropzone>
        </div>
    );
};
