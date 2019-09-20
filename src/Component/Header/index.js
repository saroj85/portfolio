import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                    <div className='logo'>I, am Saroj</div>
                    <ul className='nav'>
                        <li><a href=''>PORTFOLIO</a></li>
                        <li><a href=''>ABOUT</a></li>
                        <li><a href=''>contact</a></li>
                    </ul>
            </header>
        );
    }
}



export default Header;