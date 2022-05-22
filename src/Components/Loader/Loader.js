import React from "react";
import crystalBall from '../../assets/crystal-ball.png';
import './Loader.scss';

const Loader = () => {
    return (
        <section data-testid='loader' className='pos-center'>
            <img 
                className='pos-center flicker-animation loading-img' 
                src={crystalBall} 
                alt='Crystal ball for loading response to your prompt'
            />
            {/* <div className='loader pos-center'></div> */}
        </section>
    )
}

export default Loader;