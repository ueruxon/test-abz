import React from 'react';

import logo from '../../assets/logo-img.svg';
import avatar from '../../assets/avatar.png';


import styles from './header.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="#">
                    <img src={logo} alt="Denteez" />
                </a>
            </div>
            <div className={styles['search-content']}>
                <form action="">
                    <input type="text" placeholder="Search" />
                </form>
            </div>
            <div className={styles['btn-content']}>
                <span className={`${styles['icons']} ${styles['chat-icon']}`} />
                <span className={`${styles['icons']} ${styles['alarm-icon']}`} />
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar" />
                    <span>Maximillian Beekeeper</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
