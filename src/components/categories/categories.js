import React from 'react';

import styles from './categories.scss';

const CategoriesList = ({ categories }) => {
    return (
        <section className={styles.content}>
            <div className={styles['content-title']}>
                <h1>Service Directory</h1>
                <a href="#">Add New Service</a>
            </div>
            <div className={styles['content-body']}>
                <ul>
                    {categories.map(service => (
                        <li key={service.id} className={styles.item}>
                            <a href="#" className={styles.link}>
                                <div >
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                    />
                                </div>
                                <span className={styles.title}>{service.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CategoriesList;
