import React from "react";
import "../SCSS/NavBar.scss";
import { withRouter } from "react-router-dom";

function  NavBar () {
    return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>
            <a href="https://leetcodeanswers.com">
                <h1>leetcodeanswers.com</h1>
            </a>
        </div>
        <div className='navbar__item'>
            <a href="https://www.youtube.com/channel/UC-DL9v2dIGIoJZRakMbBppw">
                <h2> New Video Every Week!</h2>
            </a>
        </div>     
    </header>
    );
};

export default withRouter(NavBar);
