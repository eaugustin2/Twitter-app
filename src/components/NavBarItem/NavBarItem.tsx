import React from 'react';
import { ImageBlockInterface } from '../ImageBlockInterface';
import '../global.scss';

interface NavBarItemInterface {
    title?: string;
    image?: ImageBlockInterface;
    anchor: string;
}

const NavBarItem = ({
    title,
    image,
    anchor
}: NavBarItemInterface) => {

    return (
        <section className='navbar-item'>
            <div className='navbar-item__container'>

                <div className='navbar-item__container_image-container'>
                    <a href={anchor} className='navbar-item__container_image-container__link'>
                        <img className='navbar-item__container_image-container__image' src={image?.imageUrl} alt={image?.altText}/>
                    </a>
                </div>

                <div className='navbar-item__container_title'>
                    {title}
                </div>


            </div>
        </section>
    )
}

export default NavBarItem;