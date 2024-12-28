import React from 'react';
import './Header.css';
import TypingEffect from './TypingEffect';

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                {/* Add the typing effect */}
                <TypingEffect text="Welcome, To foody : Order your favorite dishes"/>
                
                {/* Add a button */}
                {/* <button className="menu-button">Menu</button> */}
            </div>
        </div>
    );
};

export default Header;
