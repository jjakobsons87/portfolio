import React, { Component } from 'react';
import Fade from "react-reveal";

// function About(props) {
//     const { currentCategory} = props;

//     return (
//         <section className='mainContent'>
//             <div className='title'>
//                 <h2 className='page-title-text'>
//                     {capitalizeFirstLetter(currentCategory.name)}
//                 </h2>
//             </div>
            
//             <div className='profilePic'>
//                 <img src={require('../../assets/images/OST_Kickoff_Headshots-262.jpg')}
//                 alt='Headshot of Jeremy' 
//                 />
//             </div>

//             <div>
//                 <p>
//                     Hey There! My name is Jeremy Jakobsons and I am a full stack Web Developer in training with Michigan State University! 
//                 </p>
//                 <p>
//                     Currently I serve as an Agile Coach helping software development teams learn how to work best together with each other, and with the larger program teams! 
//                 </p>
//             </div>
//         </section>
//     )
// }

class About extends Component {
    render() {
        if (!this.props.data) return null;

        const name = this.props.data.name;
        const profilepic = "images/" + this.props.data.image;
        const bio = this.props.data.bio;
        // const street = this.props.data.address.street;
        // const city = this.props.data.address.city;
        // const state = this.props.data.address.state;
        // const zip = this.props.data.address.zip;
        // const phone = this.props.data.phone;
        const email = this.props.data.email;
        const resumeDownload = this.props.data.resumedownload;

        return (
        <section id="about">
            <Fade duration={1000}>
            <div className="row">
                <div className="three columns">
                <img
                    className="profile-pic"
                    src={profilepic}
                    alt="Nordic Giant Profile Pic"
                />
                </div>
                <div className="nine columns main-col">
                <h2>About Me</h2>

                <p>{bio}</p>
                <div className="row">
                    <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                        <span>{name}</span>
                        {/* <br /> */}
                        {/* <span>
                        {street}
                        <br />
                        {city} {state}, {zip}
                        </span>
                        <br />
                        <span>{phone}</span> */}
                        <br />
                        <span>{email}</span>
                    </p>
                    </div>
                    <div className="columns download">
                    <p>
                        <a href={resumeDownload} className="button">
                        <i className="fa fa-download"></i>Download Resume
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </Fade>
        </section>
        );
    }
}

export default About; 