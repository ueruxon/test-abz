import React from 'react';

import ListGroup from './listGroup';
import CompaniesBlock from './companiesBlock';
import AdvertiseBlock from '../otherBlocks/advertiseBlock';

import advertise1 from '../../assets/Advertise1.png';

import styles from './leftAside.scss';

const LeftAside = () => {
    return (
        <aside className={styles['left-aside']}>
            <ListGroup />
            <AdvertiseBlock imgSrc={advertise1} />
            <CompaniesBlock />
            <div className={styles['side-footer']}>
                <span>Denteez Copyright 2015</span>
                <span>
                    <a href="#">Terms of use</a>
                    <a href="#">Privacy Policy</a>
                </span>
            </div>
        </aside>
    );
};

export default LeftAside;
