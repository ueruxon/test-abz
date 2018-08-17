import React from 'react';

import styles from './rightAside.scss';

const MediaList = ({ list }) => {
    return (
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <div className={styles.itemLink}>
                        <a href="#">{item.name}</a>
                    </div>
                    <div className={styles.mediaItem}>
                        <div className={styles.itemLeft}>
                            <a href="#">
                                <img src={item.img} alt={item.name} />
                            </a>
                        </div>
                        <div className={styles.itemRight}>
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
