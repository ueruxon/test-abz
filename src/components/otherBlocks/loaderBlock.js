import React, { Fragment } from 'react';

import preloader from '../../assets/others/photo-preloader.gif';

import styles from './other.scss';

const Loader = ({ loading, children }) => {
    return (
        <Fragment>
            {loading ? (
                <div className={styles.preloader}>
                    <img src={preloader} alt="loading" />
                    <span>Wait please, the content is loading...</span>
                </div>
            ) : (
                children
            )}
        </Fragment>
    );
};

export default Loader;
