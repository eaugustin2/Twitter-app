import React from 'react';
import Image from 'react-bootstrap/Image';
import './ProfilePicture.css';

export const ProfilePicture = () => {

    return (
        <div>
            <Image className='pfp mb-2' fluid roundedCircle src='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'>
            </Image>
        </div>
    )
}