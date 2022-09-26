import React from 'react';
import './ProfilePicture.css';
import { ImageBlockInterface } from '../ImageBlockInterface';
import '../global.scss';

interface ProfilePictureInterface {
    image: ImageBlockInterface;
}

export const ProfilePicture = ({image}: ProfilePictureInterface) => {

    return (
        <section className='profile-picture'>
            <div className='profile-picture__container'>
                <img className='profile-picture__container__image' src={image.imageUrl} alt={image.altText} />
            </div>
        </section>
    )
}