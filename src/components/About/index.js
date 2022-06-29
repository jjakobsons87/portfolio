import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers.js';

function About(props) {
    const { currentCategory} = props;

    return (
        <section className='mainContent'>
            <div className='title'>
                <h2 className='page-title-text'>
                    {capitalizeFirstLetter(currentCategory.name)}
                </h2>
            </div>
            
            <div className='profilePic'>
                <img src={require('../../assets/images/OST_Kickoff_Headshots-262.jpg')}
                alt='Headshot of Jeremy' 
                />
            </div>

            <div>
                <p>
                    Hey There! My name is Jeremy Jakobsons and I am a full stack Web Developer in training with Michigan State University! 
                </p>
                <p>
                    Currently I serve as an Agile Coach helping software development teams learn how to work best together with each other, and with the larger program teams! 
                </p>
            </div>
        </section>
    )
}

export default About; 