import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Header() {
    // const {
    //     categories = [],
    //     setCurrentCategory,
    //     currentCategory,
    //     contactSelected,
    //     setContactSelected,
    // } = props;

    return (
        <header className="flex-row px-1">
        <h2>
            <a href="/">
            <span>
                {" "}
                📸
            </span>
            Jeremy Jakobsons
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <a
                href="#about"
                // onClick={() => setContactSelected(false)}
                >
                About me
                </a>
            </li>
            <li className='mx-2'>
                <span>Contact</span>
            </li>
                <li>
                <span>
                </span>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;
