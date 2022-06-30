import React, { Component } from 'react';
import Fade from 'react-reveal';


// function Footer() {
//     return (
//         <footer>
//             <div className='footer-container'>
//                 <p> &copy; Created by Jeremy Jakobsons</p>
//                 <div className='footer-content'>
//                     <a href='https://github.com/jjakobsons87'>
//                         {/* <GoMarkGithub /> */}
//                     </a>
//                 </div>
//                 <div className='footer-content'>
//                     <a href='https://www.linkedin.com/in/jeremy-jakobsons/'>
//                         {/* <AiFillLinkedin /> */}
//                     </a> 
//                 </div>
//                 <div className='footer-content'>
//                     <a href='https://www.instagram.com/jeremyjako/'>
//                         {/* <AiFillInstagram /> */}
//                     </a>
//                 </div>
//             </div>
//         </footer>
//     )
// }

class Footer extends Component {
    render() {
        if (!this.props.data) return null;

        const networks = this.props.data.social.map(function (network) {
        return (
            <li key={network.name}>
            <a href={network.url}>
                <i className={network.className}></i>
            </a>
            </li>
        );
        });

        return (
        <footer>
            <div className="row">
            <Fade bottom>
                <div className="twelve columns">
                <ul className="social-links">{networks}</ul>

                <ul className="copyright">
                    <li>&copy; Copyright 2022 Jeremy Jakobsons</li>
                    <li>
                    Design by{" "}
                    <a title="Styleshout" href="http://www.styleshout.com/">
                        Styleshout
                    </a>
                    </li>
                </ul>
                </div>
            </Fade>

            <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open"></i>
                </a>
            </div>
            </div>
        </footer>
        );
    }
}

export default Footer;