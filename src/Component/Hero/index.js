import React, { Component } from 'react';
import Gap from '../Gap';
import Hr from '../Hr';

class Hero extends Component {
    render() {
        return (
            <section className='hero'>
                <img src='https://saroj85.github.io/SarojProfile/img/saroj01.jpg' alt='saroj'  className='sm_intro_img'/>
                <h1>START SAROJ</h1>
                <Gap h="1rem" />
                <Hr color="#fff"/>
                <p>Web Designer- User Experience Developer</p>
            </section>
        );
    }
}

export default Hero;