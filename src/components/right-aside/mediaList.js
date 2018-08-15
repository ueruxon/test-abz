import React from 'react';

import styles from './rightAside.scss';

const MediaList = ({ list }) => {
    return (
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <div className={styles['item-link']}>
                        <a href="#">{item.name}</a>
                    </div>
                    <div className={styles['media-item']}>
                        <div className={styles['item-left']}>
                            <a href="#">
                                <img src={item.img} alt={item.name} />
                            </a>
                        </div>
                        <div className={styles['item-right']}>
                            <span>{item.desc}</span>
                            {item.adress && <span>{item.adress}</span>}
                            {item.adress && <a href="#">Add Friends</a>}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MediaList;
