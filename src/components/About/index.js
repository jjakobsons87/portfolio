import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers.js';

function About(props) {
    const { currentCategory} = props;

    return (
        <div className='mainContent'>
            <div className='title'>
                <h2 className='page-title-text'>
                    {capitalizeFirstLetter(currentCategory.name)}
                </h2>
            </div>
            
            <div>
                <img className='profilePic' src={require('../../assets/images/OST_Kickoff_Headshots-262.jpg')}
                alt='Headshot of Jeremy' 
                />
            </div>

            <section>
            </section>
        </div>
    )
}

export default About; 