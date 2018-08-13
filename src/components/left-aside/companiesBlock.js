import React from 'react';

import styles from './leftAside.scss';

import company1 from '../../assets/others/Company1.png';
import company2 from '../../assets/others/Company2.png';
import company3 from '../../assets/others/Company3.png';

const companies = [
    {
        srcImg: company1,
        category: 'Manufacturer',
        address: 'Belgrade, Serbia',
        id: 1
    },
    {
        srcImg: company2,
        category: 'Service Provider',
        address: 'New York, USA',
        id: 2
    },
    {
        srcImg: company3,
        category: 'Supplier',
        address: 'London, England',
        id: 3
    }
];

const Companies = () => {
    return (
        <div>
            <div className={styles.ads}>
                <span>Featured companies</span>
                <a href="#">See all</a>
            </div>
            <ul>
                {companies.map(company => (
                    <li key={company.id} className={styles['about-company']}>
                        <div className={styles['about-left']}>
                            <a href="#">
                                <img src={company.srcImg} alt="name company" />
                            </a>
                        </div>
                        <div className={styles['about-right']}>
                            <h4>Company Name</h4>
                            <span>{company.category}</span>
                            <span>{company.address}</span>
                            <a href="#">Follow Now</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Companies;
