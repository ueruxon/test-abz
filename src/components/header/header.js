import React from 'react';
import logo from '../../assets/logo-img.svg';
import avatar from '../../assets/avatar.png';
import styles from './header.scss';


const Header = () => {
    return <header>
            <div>
                <a href="#">
                    <img src={logo} alt="Denteez" />
                </a>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <button />
                <button />
                <div>
                    <img src={avatar} alt="avatar" />
                    <span>Maximillian Beekeeper</span>
                </div>
            </div>
        </header>;
};

export default Header;
