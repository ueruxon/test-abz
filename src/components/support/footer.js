import React from 'react';

import styles from './index.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>Denteez copyright 2018</div>
            <nav className={styles.navigation}>
                <a href="#">Support</a>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
            </nav>
        </footer>
    );
};

export default Footer;