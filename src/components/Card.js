import React from 'react';

/**
 * Render a card component with an image, position, name, and email.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.imgSrc - The URL for the image to display.
 * @param {string} props.position - The job position of the person.
 * @param {string} props.name - The name of the person.
 * @param {string} props.email - The email address of the person.
 * @returns {JSX.Element} - A card component with the specified data.
 */

function Card({imgSrc, position, name, email}){
    return (
        <div className='card'>
            <img src={imgSrc} alt={name} className='card-image' />
            <h1>{name}</h1>
            <br/>
            <h2><b>{position}</b></h2>
            <h2><a href={`mailto:${email}`}>{email}</a></h2>
        </div>
    );
}

export default Card;