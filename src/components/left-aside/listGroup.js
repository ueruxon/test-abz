import React from 'react';

import feed from '../../assets/icons/feed.svg';
import ask from '../../assets/icons/ask.svg';
import companies from '../../assets/icons/companies.svg';
import services from '../../assets/icons/services.svg';

import styles from './leftAside.scss';

const group = [
    {
        id: 1,
        text: 'Feed',
        src: feed
    },
    {
        id: 2,
        text: 'Ask a Colleague',
        src: ask
    },
    {
        id: 3,
        text: 'Companies',
        src: companies
    },
    {
        id: 4,
        text: 'Service Directory',
        src: services
    }
];

const ListGroup = () => {
    return (
        <ul className={styles.list}>
            {
                group.map(item => {
                    return (
                        <li key={item.id} className={styles['list-item']}>
                            <a href="#" className={styles['item-link']}>
                                <img src={item.src} alt={item.text} />
                                <span>{item.text}</span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListGroup;