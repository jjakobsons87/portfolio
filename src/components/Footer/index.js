import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <p>Created by Jeremy Jakobsons</p>
                <div>
                    <a href='https://github.com/jjakobsons87'>
                        <GoMarkGithub />
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/jeremy-jakobsons/'>
                        <AiFillLinkedin />
                    </a> 
                </div>
                <div>
                    <a href='https://www.instagram.com/jeremyjako/'>
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;