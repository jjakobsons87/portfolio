import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from 'react-bootstrap/Nav';

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a className="mainPage" href="/">
                    <img className="iconPic" src={require('../../assets/images/avatar.png')}
                    alt="Author Avatar Memoji"
                    /> Jeremy Jakobsons
                </a>
            </h2>

            <Nav className="flex-row justify-content-end" activeKey="/home">
                <Nav.Item className="mx-2">
                    <Nav.Link href="/home">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                    <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                    <Nav.Link eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                    <Nav.Link eventKey="link-3">Resume</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    );
}

export default Header;
