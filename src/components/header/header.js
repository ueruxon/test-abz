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
            <div className={styles.searchContent}>
                <form action="">
                    <input type="text" placeholder="Search" />
                </form>
            </div>
            <div className={styles.btnContent}>
                <span className={`${styles.icons} ${styles.chatIcon}`} />
                <span className={`${styles.icons} ${styles.alarmIcon}`} />
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar" />
                    <span>Maximillian Beekeeper</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
