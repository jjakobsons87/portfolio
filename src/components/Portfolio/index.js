import React from 'react';


function Portfolio() {


    return(
        <section className='flex'>
            <div className='proj-container'>
                
                {/* project 1 */}
                <div className='project'>
                    <h1>The B Word</h1>
                    <a className='link' href='https://limitless-journey-42984.herokuapp.com/' target="_blank">
                        <img src={require(`../../assets/images/bword.jpg`)} />
                    </a>

                </div>

            </div>
        </section>
    )
}

export default Portfolio;