import React, { Component } from 'react'
import classes from './Header.module.css'
import styled from 'styled-components'

import logo from '../../imgs/logo.svg';
import heart from '../../imgs/heart.png';



const Image = styled.img`
    cursor: pointer;
    height 100%;
    position: absolute;
    left: 6.74%;
    right: 86.18%;
    top: 1.67%;
    bottom: 94.44%;
`;

const ImageHeart = styled(Image)`
    position: absolute;
    left: 87.57%;
    right: 11.04%;
    top: 2.87%;
    bottom: 95.37%;
    height: 75%
`;

class Header extends Component {
    render(){

        return (
            <div className={classes.header}>
                <Image src={logo} onClick={()=>console.log('TODO: readres to home')} />
                <ImageHeart src={heart} onClick={()=>console.log('TODO: show favorite products ')} />


            </div>
        )
    }
}

export default Header