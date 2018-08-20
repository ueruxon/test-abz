import React from 'react';

import styles from './index.scss';

const AboutUs = () => {
    return (
        <section className={styles.container}>
            <h1>About Denteez</h1>
            <div className={styles.containerItem}>
                <p>
                    Why is it always so difficult to find what you are looking
                    for in dentistry? Whether it is the latest advancement in
                    technology or techniques or simply a review or understanding
                    of the vast amount of products? Perhaps finding someone to
                    just fix your broken equipment or simply hiring new staff or
                    looking for that new job?
                </p>
                <p>
                    Our mission is to give every dental professional the
                    possibility to discuss and share all aspects of their
                    profession, their practice and their business. We aim to
                    make the world of dentistry easy and accessible, so every
                    dental professional can find what they are looking for
                    quickly and easily all in one
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
