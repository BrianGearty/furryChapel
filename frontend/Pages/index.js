import React, { useState, useEffect, useCallback } from 'react';
import '../Styles/main.scss';
import logo from "../../public/media/dogChurch.jpg"

const Home = () => {

    return (
        <div className="App">
            <h1 className="header">Furry Chapel</h1>
            <img className="hero" src={logo} alt="logo" />
            <h3 className="header">Welcome all creeds & all breeds!</h3>
            <p className='homeText'>We are excited to announce the future home of our shelter at our new location Furry Chapel!
                We have a state of the art space with more room for our furry friends to run free and play together.
                Stay tuned for more announcements on our grand opening!
            </p>
        </div>
    );
};

export default Home;
