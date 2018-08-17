import React from 'react';

import styles from './index.scss';

export const CustomInput = props => {
    const { meta, label } = props;
    return (
        <div className={styles.formGroup}>
            <label className={styles.text}>{label}</label>
            <input
                {...props.input}
                type={props.type}
                className={styles.formControl}
                placeholder={props.placeholder}
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
                className={styles.formControl}
                onChange={event => setTypeValue(event)}
                value={typeValue}
            >
                <option />
                {props.types.map((type, i) => (
                    <option key={i} value={type.name}>
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
    const { meta, name } = props;
    return (
        <div className={styles.formGroup}>
            <span className={styles.textS}>Description *</span>
            <textarea
                name={name}
                {...props.input}
                cols="30"
                rows="10"
                className={`${styles.formControl} ${styles.area}`}
            />
            {meta.error &&
                meta.touched && (
                    <span className={styles.errorMessage}>{meta.error}</span>
                )}
        </div>
    );
};
