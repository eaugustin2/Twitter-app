import React from 'react';
// import Nav from "react-bootstrap/Nav";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import  NavBarItem  from '../NavBarItem/NavBarItem'

export const NavBar = () => {
    return(
        <div className='navbar'>

            <div className='navbar-left'>

                <NavBarItem title='Home' anchor='#'/>
                <NavBarItem title='Moments' anchor='#'/>
                <NavBarItem title='Notifications' anchor='#'/>
                <NavBarItem title='Messages' anchor='#'/>

            </div>

            <div className='navbar-center'>
                <NavBarItem title='Home' anchor='#'/>
            </div>

            <div className='navbar-right'>
                <ProfilePicture image={{imageUrl: 'https://image.shutterstock.com/image-vector/vector-blue-cartoon-cool-bird-260nw-107564378.jpg', altText: 'cool-bird'}}/>
                <NavBarItem title='Home' anchor='#'/>
            </div>
            
        </div>
    )
}