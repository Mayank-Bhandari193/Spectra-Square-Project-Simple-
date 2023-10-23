import React from 'react';
import web from '../src/images/1.jpg';
import Common from'./Common';
const About = () => {
    return(
        <>
        <Common name="Welcome To About Page" imgsrc={web} visit='/Contact' btname='ContactNow'/>
                    
        </>
    );
};

export default About;