import React from 'react';
import Card from './Card';
const Works = () => {
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our Works</h1>
        </div>
        <div className="Container-fluid nav bg">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className='row gy-4' >
                        <Card />
</div>
</div>
            </div>
        </div>            

        </>
    );
};

export default Works;