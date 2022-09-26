import React from 'react';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import  NavBarItem  from '../NavBarItem/NavBarItem'

export const NavBar = () => {
    return(
        <div className='navbar'>

            <div className='navbar__left'>

                <NavBarItem title='Home' anchor='#'/>
                <NavBarItem title='Moments' anchor='#'/>
                <NavBarItem title='Notifications' anchor='#'/>
                <NavBarItem title='Messages' anchor='#'/>

            </div>

            <div className='navbar__center'>
                <NavBarItem title='Home' anchor='#'/>
            </div>

            <div className='navbar__right'>
                <ProfilePicture image={{imageUrl: 'https://image.shutterstock.com/image-vector/vector-blue-cartoon-cool-bird-260nw-107564378.jpg', altText: 'cool-bird'}}/>
                <NavBarItem title='Home' anchor='#'/>
            </div>
            
        </div>
    )
}