import React from 'react';

import styles from './other.scss';

const Advertise = ({ imgSrc }) => {
    return (
        <div style={{marginBottom: '3px'}}>
            <span className={styles.title}>Advertisement</span>
            <div className={styles.adv}>
                <a href="#">
                    <img src={imgSrc} alt="Закажи рекламу, чёрт" />
                </a>
            </div>
            <a href="#" className={styles.about}>
                Ads By Denteez.com
            </a>
        </div>
    );
};

export default Advertise;
