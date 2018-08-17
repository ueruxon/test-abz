import React from 'react';

import logo from '../../assets/logo-img.svg';

import styles from './index.scss';

const Header = () => {
    return (
        <header className={styles.headerSupport}>
            <div className={styles.nav}>
                <div>
                    <a href="#">
                        <img src={logo} alt="Denteez" />
                    </a>
                </div>
                <div className={styles.login}>
                    <a href="#">Log In Now</a>
                </div>
            </div>
            <h1 className={styles.title}>Home of Dentistry</h1>
            <p className={styles.text}>
                Denteez was created by dentists for dentistry in order to <br />{' '}
                make the life of everyone involved in dentistry easier
            </p>
        </header>
    );
};

export default Header;
