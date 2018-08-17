import React from 'react';

import styles from './index.scss';

export const CustomInput = props => {
    return (
        <div className={styles['form-group']}>
            <label className={styles.text}>{props.label}</label>
            <input
                {...props.input}
                type={props.type}
                className={styles['form-control']}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export const CustomSelect = props => {
    return (
        <div className={styles['form-group']}>
            <label className={styles.text}>{props.label}</label>
            <select {...props.input} className={styles['form-control']}>
                <option />
                {props.types.map((type, i) => (
                    <option key={i} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export const CustomTextArea = props => {
    return (
        <div className={styles['form-group']}>
            <span className={styles.textS}>Description *</span>
            <textarea
                name={props.name}
                {...props.input}
                cols="30"
                rows="10"
                className={`${styles['form-control']} ${styles.area}`}
            />
        </div>
    );
};
