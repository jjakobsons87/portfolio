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
            <span>
                {" "}
                📸
            </span>
            Jeremy Jakobsons
            </a>
        </h2>

        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        </header>
    );
}

export default Header;
