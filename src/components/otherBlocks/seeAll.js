import React from 'react';

import styles from './other.scss';

const SeeAll = ({ text }) => {
    return (
        <div className={styles.ads}>
            <span>{text}</span>
            <a href="#">See All</a>
        </div>
    );
};

export default SeeAll;