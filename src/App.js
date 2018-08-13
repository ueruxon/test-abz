import React, { Fragment } from 'react';

import Header from './components/header/header';
import LeftAside from './components/left-aside/leftAside';

import styles from './main.scss';

export default () => {
    return (
        <Fragment>
            <Header />
            <div className={styles.wrapper}>
                <LeftAside />
            </div>
        </Fragment>
    );
};
