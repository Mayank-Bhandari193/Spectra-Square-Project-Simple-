import React from 'react';
import web from '../src/images/1.jpg';
import Common from './Common';
const Home = () => {
    return(
        <>
           <Common name="Welcome To Home Page" imgsrc={web} visit='/contact' btname='Contact Us'/>
        </>
    );
};

export default Home;
