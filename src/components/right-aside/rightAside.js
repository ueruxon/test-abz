import React from 'react';

import SeeAll from '../otherBlocks/seeAll';
import MediaList from './mediaList';
import AdvertiseBlock from '../otherBlocks/advertiseBlock';

import styles from './rightAside.scss';

import people1 from '../../assets/others/people1.png';
import people2 from '../../assets/others/people2.png';
import people3 from '../../assets/others/people3.png';
import product1 from '../../assets/others/product1.png';
import product2 from '../../assets/others/product2.png';
import advertise2 from '../../assets/Advertise2.png';

const people = [
    {
        id: 1,
        img: people1,
        name: 'Dennis Adams',
        desc: 'Dentist (Practice  Owner)',
        adress: 'London, England'
    },
    {
        id: 2,
        img: people2,
        name: 'Mary Carpenter',
        desc: 'Dentist (Practice  Owner)',
        adress: 'Belgrade, Serbia'
    },
    {
        id: 3,
        img: people3,
        name: 'Danielle Salazar',
        desc: 'Dentist (Practice  Owner)',
        adress: 'Paris, France'
    }
];

const products = [
    {
        id: 1,
        img: product1,
        name: 'Product Name',
        desc:
            'Product Short  Description.  The quick brown  fox jumps over the lazy dog.'
    },
    {
        id: 2,
        img: product2,
        name: 'Product Name',
        desc:
            'Product Short  Description.  The quick brown  fox jumps over the lazy dog.'
    }
];

const RightAside = () => {
    return (
        <aside className={styles.rightAside}>
            <div className={styles.wrapR}>
                <SeeAll text={'People you may know'} />
                <MediaList list={people} />
            </div>
            <div className={styles.wrapR}>
                <SeeAll text={'Featured products'} />
                <MediaList list={products} />
            </div>
            <AdvertiseBlock imgSrc={advertise2} />
        </aside>
    );
};

export default RightAside;
