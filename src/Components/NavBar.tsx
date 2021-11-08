import React from "react";
import "../SCSS/NavBar.scss";
import { withRouter } from "react-router-dom";

function  NavBar () {
    return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>
            <a href="https://leetgeeks.io">
                <h1>leetgeeks.io</h1>
            </a>
        </div>
        <div className='navbar__item'>
            <a href="https://www.youtube.com/channel/UC-DL9v2dIGIoJZRakMbBppw">
                <h2>Solve popular Leetcode questions with step by step walkthroughs</h2>
            </a>
        </div>     
    </header>
    );
};

export default withRouter(NavBar);
