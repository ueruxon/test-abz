import React from 'react';

import styles from './header.scss';


const Header = () => {
    return <header>
            <div>
                <a href="#">
                    <img src="../../assets/logo-img.svg" alt="Denteez" />
                </a>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <button />
                <button />
                <div>
                    <img src="../../assets/avatar.png" alt="avatar" />
                    <span>Maximillian Beekeeper</span>
                </div>
            </div>
        </header>;
};

export default Header;